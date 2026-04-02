// Cloudflare Pages Function: /api/auth
// Redirects user to GitHub OAuth authorization page

interface Env {
  GITHUB_CLIENT_ID: string;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const clientId = context.env.GITHUB_CLIENT_ID;

  if (!clientId) {
    return new Response('GITHUB_CLIENT_ID not configured', { status: 500 });
  }

  const scope = 'repo,user';
  const authUrl = new URL('https://github.com/login/oauth/authorize');
  authUrl.searchParams.set('client_id', clientId);
  authUrl.searchParams.set('scope', scope);

  // Use the request origin to build the redirect_uri dynamically
  const requestUrl = new URL(context.request.url);
  const redirectUri = `${requestUrl.origin}/api/callback`;
  authUrl.searchParams.set('redirect_uri', redirectUri);

  return Response.redirect(authUrl.toString(), 302);
};
