import { useUser } from "@clerk/clerk-react";

export default function Account() {
  const { user } = useUser();
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <span className="text-white text-3xl">{user?.firstName}</span>
    </div>
  );
}
