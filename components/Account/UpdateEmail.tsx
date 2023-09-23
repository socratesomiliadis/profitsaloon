import { useRouter } from "next/router";
import { useSignUp } from "@clerk/nextjs";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import { CircularProgress } from "@nextui-org/react";
import { useUser } from "@clerk/nextjs";
import { toast } from "sonner";

export default function UpdateEmail({ onClose }: { onClose: () => void }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { user, isLoaded } = useUser();
  const [pendingVerification, setPendingVerification] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [clerkErrors, setClerkErrors] = useState<any>(null);
  const [email, setEmail] = useState<any>(null);
  const toggleVisibility = () => setIsVisible(!isVisible);

  //   let email: any;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

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
      const email = await user?.createEmailAddress({
        email: data.email,
      });

      setEmail(email);

      await email?.prepareVerification({
        strategy: "email_code",
      });

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
      const completeSignUp = await email.attemptVerification({
        code: data.code,
      });
      if (completeSignUp.status !== "complete") {
        /*  investigate the response, to see if there was an error
         or if the user needs to complete more steps.*/
        console.log(JSON.stringify(completeSignUp, null, 2));
      }
      if (completeSignUp.status === "complete") {
        user?.update({ primaryEmailAddressId: email.id });
        toast.success("Email updated successfully!");
        onClose();
        setLoading(false);
      }
    } catch (err: any) {
      setLoading(false);
      //   if (!!err?.errors[0]?.longMessage)
      //     setClerkErrors(err.errors[0].longMessage);
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
          <form
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-start gap-4"
          >
            <Input
              type="email"
              label="New E-mail"
              size="sm"
              errorMessage={errors.email && "Please enter a valid email"}
              isInvalid={!!errors.email}
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
            isInvalid={!!errors.code}
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
