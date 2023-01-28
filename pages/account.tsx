import { useUser } from '@/utils/useUser';

export default function Account() {
  const { user, userDetails } = useUser();

  if (user) return <main className="w-screen h-[100vh]"></main>;
  else return <main className="w-screen h-[300vh]"></main>;
}
