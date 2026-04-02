// Cloudflare Pages Function: /api/callback
// Exchanges GitHub authorization code for an access token
// and sends it back to the Decap CMS admin panel via postMessage

interface Env {
  GITHUB_CLIENT_ID: string;
  GITHUB_CLIENT_SECRET: string;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const url = new URL(context.request.url);
  const code = url.searchParams.get('code');

  if (!code) {
    return new Response('Missing code parameter', { status: 400 });
  }

  const clientId = context.env.GITHUB_CLIENT_ID;
  const clientSecret = context.env.GITHUB_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return new Response('OAuth credentials not configured', { status: 500 });
  }

  // Exchange the code for an access token
  const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      code,
    }),
  });

  const tokenData = await tokenResponse.json() as {
    access_token?: string;
    error?: string;
    error_description?: string;
  };

  if (tokenData.error || !tokenData.access_token) {
    const errorMsg = tokenData.error_description || tokenData.error || 'Unknown error';
    return new Response(renderMessage('error', errorMsg), {
      headers: { 'Content-Type': 'text/html;charset=UTF-8' },
      status: 400,
    });
  }

  // Send the token to the Decap CMS opener window via postMessage
  return new Response(
    renderMessage('success', JSON.stringify({ token: tokenData.access_token, provider: 'github' })),
    { headers: { 'Content-Type': 'text/html;charset=UTF-8' } }
  );
};

function renderMessage(status: 'success' | 'error', content: string): string {
  return `<!DOCTYPE html>
<html>
<head><title>Autenticação</title></head>
<body>
  <script>
    (function() {
      function sendMessage(message) {
        var authorizeCallback = function(e) {
          if (e.data === "authorizing:github") {
            window.removeEventListener("message", authorizeCallback);
            window.opener.postMessage(
              "authorization:github:" + message.status + ":" + JSON.stringify(message.content),
              e.origin
            );
          }
        };
        window.addEventListener("message", authorizeCallback);
        window.opener.postMessage("authorizing:github", "*");
      }
      sendMessage({
        status: "${status}",
        content: ${status === 'success' ? content : `"${content}"`}
      });
    })();
  </script>
</body>
</html>`;
}
