import { NextApiHandler } from "next";
import { stripe } from "@/utils/stripe";
import { createOrRetrieveCustomer } from "@/utils/supabase-admin";
import { getURL } from "@/utils/helpers";
import { getAuth } from "@clerk/nextjs/server";

const CreateCheckoutSession: NextApiHandler = async (req, res) => {
  if (req.method === "POST") {
    const { quantity = 1, metadata = {} } = req.body;
    const { userId, user } = getAuth(req);

    try {
      const primaryEmail = user?.emailAddresses.find(
        (email) => email.id === user.primaryEmailAddressId
      )?.emailAddress;

      const customer = await createOrRetrieveCustomer({
        userId: userId || "",
        email: primaryEmail || "",
      });

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        billing_address_collection: "required",
        customer,
        line_items: [
          {
            price: "price_1MUENlGuEyK30WCUTizeN2wY",
            quantity,
          },
        ],
        mode: "subscription",
        allow_promotion_codes: true,
        subscription_data: {
          // trial_from_plan: true,
          metadata,
        },
        success_url: `${getURL()}/account`,
        cancel_url: `${getURL()}/`,
        consent_collection: {
          terms_of_service: "required",
        },
      });

      return res.status(200).json({ sessionId: session.id });
    } catch (err: any) {
      console.log(err);
      res
        .status(500)
        .json({ error: { statusCode: 500, message: err.message } });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};

export default CreateCheckoutSession;
