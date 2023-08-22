import { useRouter } from "next/router";
import { useSignUp } from "@clerk/nextjs";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@nextui-org/react";

export default function SignUp() {
  const [expired, setExpired] = useState(false);
  const [verified, setVerified] = useState(false);
  const router = useRouter();
  const { signUp, isLoaded, setSession } = useSignUp();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  if (!isLoaded) {
    return null;
  }

  const { startMagicLinkFlow, cancelMagicLinkFlow } =
    signUp.createMagicLinkFlow();

  const onSubmit = async (data: any, e: any) => {
    e.preventDefault();
    setExpired(false);
    setVerified(false);

    // Start the sign up flow, by collecting
    // the user's email address.
    await signUp?.create({
      firstName: data.name,
      emailAddress: data.email,
      unsafeMetadata: { age: data.age },
    });

    // Start the magic link flow.
    // Pass your app URL that users will be navigated
    // when they click the magic link from their
    // email inbox.
    // su will hold the updated sign up object.
    const su = await startMagicLinkFlow({
      redirectUrl: "/verification",
    });

    // Check the verification result.
    const verification = su.verifications.emailAddress;
    if (verification.verifiedFromTheSameClient()) {
      setVerified(true);
      // If you're handling the verification result from
      // another route/component, you should return here.
      // See the <MagicLinkVerification/> component as an
      // example below.
      // If you want to complete the flow on this tab,
      // don't return. Check the sign up status instead.
      return;
    } else if (verification.status === "expired") {
      setExpired(true);
    }

    if (su.status === "complete") {
      // Sign up is complete, we have a session.
      // Navigate to the after sign up URL.

      setSession(su.createdSessionId, () => router.push("/acc"));
      return;
    }
  };

  if (expired) {
    return <div>Magic link has expired</div>;
  }

  if (verified) {
    return <div>Signed in on other tab</div>;
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-start gap-4"
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
        type="number"
        label="Age"
        size="sm"
        errorMessage={errors.age && "Please enter your age"}
        validationState={errors.age ? "invalid" : "valid"}
        classNames={{
          inputWrapper: [
            "bg-gradient-to-r w-[400px] text-white border-[#282828] border-[1px] rounded-xl from-[#121212] via-[#232323] to-[#121212]",
          ],
        }}
        {...register("age", {
          required: true,
        })}
      />
      <button
        type="submit"
        className="px-8 py-2 rounded-full bg-white text-black text-sm"
      >
        Continue
      </button>
    </form>
  );
}
