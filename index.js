import { uvPath } from "@titaniumnetwork-dev/ultraviolet";
import { epoxyPath } from "@mercuryworkshop/epoxy-transport";
import { libcurlPath } from "@mercuryworkshop/libcurl-transport";
import { bareModulePath } from "@mercuryworkshop/bare-as-module3";
import { baremuxPath } from "@mercuryworkshop/bare-mux/node";
// import scramjetPath locally if needed

// You won't be able to fully use createBareServer or Wisp on Cloudflare
// Instead, expose static assets and handle requests in a stateless way

export async function onRequest(context) {
  const { request, url } = context;

  // Serve "static" assets like Express did
  if (url.pathname.startsWith("/uv/")) {
    return Response.redirect(`/${uvPath}${url.pathname.slice(4)}`, 302);
  }
  if (url.pathname.startsWith("/epoxy/")) {
    return Response.redirect(`/${epoxyPath}${url.pathname.slice(7)}`, 302);
  }
  if (url.pathname.startsWith("/libcurl/")) {
    return Response.redirect(`/${libcurlPath}${url.pathname.slice(8)}`, 302);
  }
  if (url.pathname.startsWith("/bareasmodule/")) {
    return Response.redirect(`/${bareModulePath}${url.pathname.slice(14)}`, 302);
  }
  if (url.pathname.startsWith("/baremux/")) {
    return Response.redirect(`/${baremuxPath}${url.pathname.slice(8)}`, 302);
  }
  if (url.pathname.startsWith("/scram/")) {
    return Response.redirect(`/scramjet/${url.pathname.slice(6)}`, 302);
  }

  // default fallback
  return new Response("Hello from Cloudflare Pages function!", {
    status: 200,
  });
}
