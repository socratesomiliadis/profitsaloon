import { withApiAuth } from '@supabase/auth-helpers-nextjs';
import { createClient } from '@supabase/supabase-js';
export default withApiAuth(async function linkWithDiscord(
  req,
  res,
  supabaseServerClient
) {
  const DiscordOauth2 = require('discord-oauth2');
  const oauth = new DiscordOauth2({
    clientId: '1069204538160062464',
    clientSecret: '5RUiVBKtv6AYOPm18mAzAOOtZ3JGEW_W',
    redirectUri: 'http://localhost:3000/api/callback/discord'
  });

  const { access_token } = await oauth.tokenRequest({
    code: req.query.code,
    scope: 'identify email',
    grantType: 'authorization_code'
  });
  const supabase = createClient(
    'https://wbxckevmouzgblgxfpma.supabase.co',
    process.env.SUPABASE_SERVICE_ROLE_KEY as string
  );

  const { username, discriminator, id, email } = await oauth.getUser(
    access_token
  );

  const discordIdCheck = await supabase
    .from('users')
    .select('*')
    .eq('discord_id', id);

  if (discordIdCheck.data && discordIdCheck.data.length > 0) {
    res.redirect('/discord-id-already-linked');
  } else {
    try {
      const {
        data: { user }
      } = await supabaseServerClient.auth.getUser();
      if (!user) throw Error('Could not get user');

      //If we want to update the email address, we can do it here
      // if (user.email && user.email !== email)
      //   supabaseServerClient.auth.admin.updateUserById(user.id, { email: email });

      const { error } = await supabaseServerClient
        .from('users')
        .update({
          discord_id: id,
          discord_name: `${username}#${discriminator}`
        })
        .eq('id', user.id);

      res.redirect('/account');
    } catch (err: any) {
      console.log(err);
      res
        .status(500)
        .json({ error: { statusCode: 500, message: err.message } });
    }
  }
});
