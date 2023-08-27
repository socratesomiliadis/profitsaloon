export type AuthPopupType = "signUp" | "signIn" | "none";

export type TierInfoType = {
  name: string;
  features: string[];
  calcPrice: (quantity: number) => number;
};
