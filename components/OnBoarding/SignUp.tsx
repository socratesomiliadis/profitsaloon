import { useRouter } from "next/router";
import { useSignUp } from "@clerk/nextjs";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import { CircularProgress } from "@nextui-org/react";
import PhoneInput from "../PhoneInput";

export default function SignUp({
  setActiveStep,
  stepIndex,
}: {
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  stepIndex: number;
}) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { signUp, isLoaded, setActive } = useSignUp();
  const [pendingVerification, setPendingVerification] = useState(false);
  const [countryName, setCountryName] = useState("United States");
  const [countryCode, setCountryCode] = useState("+1");
  const [isVisible, setIsVisible] = useState(false);
  const [clerkErrors, setClerkErrors] = useState<any>(null);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    console.log(countryCode, countryName);
  }, [countryCode, countryName]);

  if (!isLoaded) {
    return null;
  }

  const onSubmit = async (data: any, e: any) => {
    e.preventDefault();
    if (!isLoaded) {
      return;
    }
    setClerkErrors(null);
    setLoading(true);

    try {
      await signUp.create({
        firstName: data.name,
        emailAddress: data.email,
        password: data.password,
        unsafeMetadata: {
          birth_year: data.birthYear,
          country: countryName,
          phone_number: `${countryCode}${data.phoneNumber}`,
        },
      });

      // send the email.
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      // change the UI to our pending section.
      setPendingVerification(true);
      setLoading(false);
    } catch (err: any) {
      setLoading(false);
      setClerkErrors(err.errors[0].longMessage);
      console.error(JSON.stringify(err, null, 2));
    }
  };

  const onPressVerify = async (data: any, e: any) => {
    e.preventDefault();
    if (!isLoaded) {
      return;
    }

    setClerkErrors(null);
    setLoading(true);

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code: data.code,
      });
      if (completeSignUp.status !== "complete") {
        /*  investigate the response, to see if there was an error
         or if the user needs to complete more steps.*/
        console.log(JSON.stringify(completeSignUp, null, 2));
      }
      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId });
        setActiveStep(stepIndex + 1);
      }
    } catch (err: any) {
      setLoading(false);
      setClerkErrors(err.errors[0].longMessage);
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <AnimatePresence mode="wait">
      {!pendingVerification && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
              ease: "easeOut",
            },
          }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.6,
              ease: "easeOut",
            },
          }}
          key="sign-up-form"
        >
          <div className="flex flex-col gap-1">
            <h2 className="text-white text-4xl font-medium">
              Time to start making Profit.
            </h2>
            <p className="text-[#5c5c5c]">Sign up to get started!</p>
          </div>
          <form
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            className="mt-10 flex flex-col items-start gap-4"
          >
            <Input
              type="text"
              label="Name"
              size="sm"
              errorMessage={
                errors.name && "Your name must be at least 3 characters long"
              }
              validationState={errors.name ? "invalid" : "valid"}
              classNames={{
                inputWrapper: [
                  "bg-gradient-to-r w-[400px] text-white border-[#282828] border-[1px] rounded-xl from-[#121212] via-[#232323] to-[#121212]",
                ],
              }}
              {...register("name", {
                required: true,
                validate: (value) => value.length >= 3,
              })}
            />
            <Input
              type="email"
              label="E-mail"
              size="sm"
              errorMessage={errors.email && "Please enter a valid email"}
              validationState={errors.email ? "invalid" : "valid"}
              classNames={{
                inputWrapper: [
                  "bg-gradient-to-r w-[400px] text-white border-[#282828] border-[1px] rounded-xl from-[#121212] via-[#232323] to-[#121212]",
                ],
              }}
              {...register("email", {
                required: true,
                pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
              })}
            />
            <Input
              label="Password"
              size="sm"
              classNames={{
                inputWrapper: [
                  "bg-gradient-to-r w-[400px] text-white border-[#282828] border-[1px] rounded-xl from-[#121212] via-[#232323] to-[#121212]",
                ],
              }}
              errorMessage={
                errors.password &&
                "Your password must be at least 8 characters long"
              }
              validationState={errors.password ? "invalid" : "valid"}
              endContent={
                <button
                  className="focus:outline-none mr-1"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <span className="w-5 block">
                      <svg
                        width="100%"
                        viewBox="0 0 24 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-default-400"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.00113 0.585938L22.4153 20.0002L21.0011 21.4144L17.2035 17.6168C14.5534 19.0943 11.5789 19.3944 8.7825 18.4857C5.7439 17.4983 3.0038 15.1155 1.11262 11.4591L0.875 10.9997L1.11262 10.5403C2.19905 8.43978 3.56474 6.75983 5.10892 5.52215L1.58691 2.00015L3.00113 0.585938ZM8.00085 10.9997C8.00085 10.2584 8.20313 9.56343 8.55477 8.96801L10.0684 10.4816C10.0243 10.6468 10.0009 10.8204 10.0009 10.9997C10.0009 12.1043 10.8963 12.9997 12.0009 12.9997C12.1802 12.9997 12.3538 12.9763 12.5189 12.9322L14.0326 14.4458C13.4372 14.7975 12.7422 14.9997 12.0009 14.9997C9.79172 14.9997 8.00085 13.2089 8.00085 10.9997Z"
                          fill="currentColor"
                        />
                        <path
                          d="M22.8889 11.4594C22.16 12.8686 21.3044 14.0883 20.3551 15.1118L8.7627 3.51936C9.81638 3.17482 10.9038 3.00001 12.0006 3C16.2398 2.99997 20.3393 5.61119 22.8889 10.5405L23.1265 10.9999L22.8889 11.4594Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  ) : (
                    <span className="w-5 block">
                      <svg
                        width="100%"
                        viewBox="0 0 24 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-default-400"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.0008 2.5284e-10C16.24 -2.96819e-05 20.3395 2.61119 22.8891 7.54053L23.1267 7.99995L22.8891 8.45936C20.3395 13.3887 16.24 16 12.0009 16C7.76169 16 3.66221 13.3888 1.11262 8.45947L0.875 8.00005L1.11262 7.54064C3.66221 2.6113 7.76168 2.96844e-05 12.0008 2.5284e-10ZM8.50085 8C8.50085 6.067 10.0679 4.5 12.0009 4.5C13.9339 4.5 15.5009 6.067 15.5009 8C15.5009 9.933 13.9339 11.5 12.0009 11.5C10.0679 11.5 8.50085 9.933 8.50085 8Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
              {...register("password", {
                required: true,
                validate: (value) => value.length >= 8,
              })}
            />
            <PhoneInput
              register={register}
              countryCode={countryCode}
              setCountryCode={setCountryCode}
              countryName={countryName}
              setCountryName={setCountryName}
              //@ts-expect-error
              hasError={errors.phoneNumber}
            />
            <Input
              type="number"
              label="Birth Year"
              size="sm"
              errorMessage={
                errors.birthYear && "Please enter a valid birth year"
              }
              validationState={errors.birthYear ? "invalid" : "valid"}
              classNames={{
                inputWrapper: [
                  "bg-gradient-to-r w-[400px] text-white border-[#282828] border-[1px] rounded-xl from-[#121212] via-[#232323] to-[#121212]",
                ],
              }}
              {...register("birthYear", {
                required: true,
                pattern: /(?:(?:19|20|21)[0-9]{2})/g,
              })}
            />
            <button
              type="submit"
              className="px-6 py-2 rounded-full bg-white text-black text-sm flex flex-row items-center gap-3"
            >
              {loading && (
                <CircularProgress
                  size="sm"
                  color="default"
                  aria-label="Loading..."
                  classNames={{
                    svg: "w-4 h-4",
                  }}
                />
              )}
              <span>Continue</span>
            </button>
            {clerkErrors && (
              <span className="text-sm text-red-500">{clerkErrors}</span>
            )}
          </form>
        </motion.div>
      )}
      {pendingVerification && (
        <motion.form
          noValidate
          onSubmit={handleSubmit(onPressVerify)}
          key="verify-form"
          className="flex flex-col items-start gap-4"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.6,
              ease: "easeOut",
            },
          }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.6,
              ease: "easeOut",
            },
          }}
        >
          <div className="flex flex-col text-white">
            <h2 className="text-4xl font-medium">
              We&apos;ve sent you a verification code!
            </h2>
            <p className="text-[#5c5c5c]">Check your email inbox.</p>
          </div>
          <Input
            type="text"
            label="Code"
            size="sm"
            errorMessage={
              errors.code && "The verification code is 6 digits long"
            }
            validationState={errors.code ? "invalid" : "valid"}
            classNames={{
              inputWrapper: [
                "bg-gradient-to-r w-[400px] text-white border-[#282828] border-[1px] rounded-xl from-[#121212] via-[#232323] to-[#121212]",
              ],
            }}
            {...register("code", {
              required: true,
              validate: (value) => value.length === 6,
            })}
          />

          <button
            type="submit"
            className="px-6 py-2 rounded-full bg-white text-black text-sm flex flex-row items-center gap-3"
          >
            {loading && (
              <CircularProgress
                size="sm"
                color="default"
                aria-label="Loading..."
                classNames={{
                  svg: "w-4 h-4",
                }}
              />
            )}
            <span>Verify</span>
          </button>
          {clerkErrors && (
            <span className="text-sm text-red-500">{clerkErrors}</span>
          )}
        </motion.form>
      )}
    </AnimatePresence>
  );
}
