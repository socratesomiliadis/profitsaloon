import LinkWithDiscord from '@/components/LinkWithDiscord';
import { useUser } from '@/utils/useUser';

export default function Account() {
  const { user, userDetails } = useUser();

  if (user)
    return (
      <main className="w-screen h-[100vh] flex items-center justify-center">
        <LinkWithDiscord />
      </main>
    );
  else
    return (
      <main className="w-screen h-[300vh] flex items-center justify-center"></main>
    );
}
