import { useRouter } from 'next/router';
import { randomBytes } from 'crypto';
export default function LinkWithDiscord() {
  const router = useRouter();
  const DiscordOauth2 = require('discord-oauth2');
  const oauth = new DiscordOauth2({
    clientId: '1069204538160062464',
    clientSecret: '5RUiVBKtv6AYOPm18mAzAOOtZ3JGEW_W',
    redirectUri: 'http://localhost:3000/api/callback/discord'
  });
  function handleClick() {
    const url = oauth.generateAuthUrl({
      scope: ['identify', 'email'],
      state: randomBytes(16).toString('hex') // Be aware that randomBytes is sync if no callback is provided
    });

    router.push(url);
  }
  return (
    <button onClick={handleClick} className="text-white">
      Link with discord
    </button>
  );
}
