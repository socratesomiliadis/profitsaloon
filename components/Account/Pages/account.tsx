import { useRouter } from "next/router";
import { useSignUp, useUser } from "@clerk/nextjs";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { Input, Select, SelectItem } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import PhoneInput from "@/components/PhoneInput";
import { CircularProgress } from "@nextui-org/react";

export default function AccountMain() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { isLoaded, user } = useUser();
  const [pendingVerification, setPendingVerification] = useState(false);
  const [countryName, setCountryName] = useState("United States");
  const [countryCode, setCountryCode] = useState("+1");
  const [isVisible, setIsVisible] = useState(false);
  const [clerkErrors, setClerkErrors] = useState<any>(null);
  const generateYearOptions = () => {
    const years = [];
    for (let i = 1920; i < 2021; i++) {
      years.push(i);
    }
    const reversed = years.reverse();
    return reversed;
  };

  const [years, setYears] = useState(generateYearOptions());

  const toggleVisibility = () => setIsVisible(!isVisible);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({});

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
      await user?.update({
        username: data.username,
        firstName: data.name,
        unsafeMetadata: {
          birth_year: data.birthYear,
          country: countryName,
          phone_number: `${countryCode}${data.phoneNumber}`,
        },
      });

      // send the email.
      //   await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      // change the UI to our pending section.
      setLoading(false);
    } catch (err: any) {
      setLoading(false);
      setClerkErrors(err.errors[0].longMessage);
      console.error(JSON.stringify(err, null, 2));
    }
  };

  if (!isLoaded) return null;

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.3,
          ease: "easeOut",
        },
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.3,
          ease: "easeOut",
        },
      }}
      className="w-full h-full flex items-center justify-center absolute"
    >
      <div className="flex flex-col items-start">
        <h2 className="font-medium text-white text-4xl">Account Information</h2>
        <p className="text-[#818181]">All your account information.</p>
        <form
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className="mt-6 flex flex-col items-start gap-4"
        >
          <Input
            type="text"
            label="Username"
            size="sm"
            defaultValue={user?.username?.toString()}
            errorMessage={
              errors.username &&
              "Your username must be at least 3 characters long"
            }
            isInvalid={!!errors.username}
            className="bg-black nextui-input"
            classNames={{
              inputWrapper: [
                "bg-black w-full text-white border-[#282828] border-[1px] rounded-xl",
              ],
            }}
            {...register("username", {
              required: true,
              validate: (value) => value.length >= 3,
            })}
          />

          <Input
            type="text"
            label="Name"
            size="sm"
            autoComplete="fullName"
            defaultValue={user?.firstName?.toString()}
            errorMessage={
              errors.name && "Your name must be at least 3 characters long"
            }
            isInvalid={!!errors.name}
            className="bg-black nextui-input"
            classNames={{
              inputWrapper: [
                "w-full text-white border-[#282828] border-[1px] rounded-xl",
              ],
            }}
            {...register("name", {
              required: true,
              validate: (value) => value.length >= 3,
            })}
          />

          <PhoneInput
            register={register}
            countryCode={countryCode}
            setCountryCode={setCountryCode}
            countryName={countryName}
            setCountryName={setCountryName}
            //@ts-expect-error
            defaultCountry={user?.unsafeMetadata?.country}
            //@ts-expect-error
            defaultPhoneNumberWithCode={user?.unsafeMetadata?.phone_number}
            //@ts-expect-error
            hasError={errors.phoneNumber}
            width="500px"
          />
          <Select
            label="Birth Year"
            size="sm"
            //@ts-expect-error
            defaultSelectedKeys={[user?.unsafeMetadata?.birth_year]}
            errorMessage={errors.birthYear && "Please enter a valid birth year"}
            isInvalid={!!errors.birthYear}
            className="nextui-input"
            classNames={{
              trigger: [
                "w-[500px] text-white border-[#282828] border-[1px] rounded-xl from-[#121212] via-[#232323] to-[#121212]",
              ],
              popover: [
                "bg-black w-[500px] text-white border-[#282828] border-[1px] rounded-xl from-[#121212] via-[#232323] to-[#121212]",
              ],
            }}
            {...register("birthYear", {
              required: true,
              pattern: /(?:(?:19|20|21)[0-9]{2})/g,
            })}
          >
            {years.map((year) => (
              <SelectItem key={year} textValue={year.toString()}>
                {year}
              </SelectItem>
            ))}
          </Select>
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
            <span>Save changes</span>
          </button>
          {clerkErrors && (
            <span className="text-sm text-red-500">{clerkErrors}</span>
          )}
        </form>
      </div>
    </motion.div>
  );
}
