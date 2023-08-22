// pages/verification.jsx
// Handle magic link verification results. This is

import { MagicLinkErrorCode, isMagicLinkError, useClerk } from "@clerk/nextjs";
import { useEffect, useState } from "react";

// the final step in the magic link flow.
function Verification() {
  const [verificationStatus, setVerificationStatus] = useState("loading");

  const { handleMagicLinkVerification } = useClerk();

  useEffect(() => {
    async function verify() {
      try {
        await handleMagicLinkVerification({
          redirectUrl: "https://redirect-to-pending-sign-up",
          redirectUrlComplete: "https://redirect-when-sign-up-complete",
        });
        // If we're not redirected at this point, it means
        // that the flow has completed on another device.
        setVerificationStatus("verified");
      } catch (err: any) {
        // Verification has failed.
        let status = "failed";
        if (isMagicLinkError(err) && err.code === MagicLinkErrorCode.Expired) {
          status = "expired";
        }
        setVerificationStatus(status);
      }
    }
    verify();
  }, []);

  if (verificationStatus === "loading") {
    return <div>Loading...</div>;
  }

  if (verificationStatus === "failed") {
    return <div>Magic link verification failed</div>;
  }

  if (verificationStatus === "expired") {
    return <div>Magic link expired</div>;
  }

  return (
    <div>Successfully signed up. Return to the original tab to continue.</div>
  );
}
