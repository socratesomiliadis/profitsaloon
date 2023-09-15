import { useUser } from "@clerk/nextjs";
import Spline from "@splinetool/react-spline";

export default function Account() {
  const { user } = useUser();
  return (
    <div className="h-screen w-screen flex items-center justify-center relative">
      <div className="absolute z-10 top-1/2 -translate-y-1/2 aspect-square w-[30vw] h-auto">
        <Spline scene="https://prod.spline.design/4wLXoL8KEhJvHzGm/scene.splinecode" />
      </div>
      <span className="text-white text-3xl">{user?.firstName}</span>
    </div>
  );
}
