// functions/_middleware.js
const BOT_UA =
  /facebookexternalhit|Twitterbot|Slackbot|Discordbot|TelegramBot|WhatsApp/i;

function escapeHtml(s = "") {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function metaFor(pathname) {
  if (pathname === "/")
    return {
      title: "Signum Network - Powering a calmer kind of crypto",
      desc: "Sustainable payments, tokens, messages & smart contracts — secured by disk space since 2014.",
      image: "https://www.signum.network/og/Signum_blue.png",
    };

  if (pathname.startsWith("/mining"))
    return {
      title: "Signum Mining — Just add disk space",
      desc: "Mine Signa on everyday machines. No GPUs. No noise. Storage does the work.",
      image: "https://www.signum.network/og/SignumHDD.png",
    };

  if (pathname.startsWith("/payments"))
    return {
      title: "Signum Payments — fast, fair, global",
      desc: "Accept SIGNA on web, POS or with simple links. Low fees, real on-chain finality, and sustainable PoC+.",
      image: "https://www.signum.network/og/Signum_blue.png",
    };

  if (pathname.startsWith("/tokens"))
    return {
      title: "Signum Tokens — simple, on-chain, everywhere",
      desc: "Create and transfer on-chain tokens with low fees. Built-in market, distributions to up to 1.2M holders per block. Sustainable PoC+.",
      image: "https://www.signum.network/og/Signum_blue.png",
    };

  if (pathname.startsWith("/smartcontracts"))
    return {
      title: "Signum Smart Contracts - Self-running, efficient, on-chain",
      desc: "Self-executing smart contracts (AT) on Signum: schedule by block height, interoperate on-chain with SIP-38 Maps, and run with human-scale fees.",
      image: "https://www.signum.network/og/Signum_blue.png",
    };

  if (pathname.startsWith("/messages"))
    return {
      title: "Signum Messages — public or encrypted, on-chain",
      desc: "Attach notes to payments and transfers, or send message-only transactions. Public or end-to-end encrypted. Low fees, global reach.",
      image: "https://www.signum.network/og/Signum_blue.png",
    };

  if (pathname.startsWith("/aliases"))
    return {
      title: "Signum Aliases — human-readable names on-chain",
      desc: "Claim a human-readable alias on Signum and point it to an account, a URL, or a text record.",
      image: "https://www.signum.network/og/Signum_blue.png",
    };

  return {
    title: "Signum Network - Powering a calmer kind of crypto",
    desc: "Sustainable payments, tokens, messages & smart contracts — secured by disk space since 2014.",
    image: "https://www.signum.network/og/Signum_blue.png",
  };
}

export async function onRequest({ request, next }) {
  const ua = request.headers.get("user-agent") || "";
  const isBot = BOT_UA.test(ua);

  const res = await next();
  const ct = res.headers.get("content-type") || "";
  if (!ct.includes("text/html")) return res;
  if (!isBot) return res;

  const url = new URL(request.url);
  const { title, desc, image } = metaFor(url.pathname);

  const t = escapeHtml(title);
  const d = escapeHtml(desc);
  const img = escapeHtml(image);
  const canonical = escapeHtml(url.origin + url.pathname);

  // rewrite: remove existing title + our relevant meta tags, then inject fresh ones
  const rewritten = new HTMLRewriter()
    .on("title", { element: (e) => e.remove() })
    .on('meta[name="description"]', { element: (e) => e.remove() })
    .on('meta[property="og:title"]', { element: (e) => e.remove() })
    .on('meta[property="og:description"]', { element: (e) => e.remove() })
    .on('meta[property="og:image"]', { element: (e) => e.remove() })
    .on('meta[property="og:url"]', { element: (e) => e.remove() })
    .on('meta[property="og:type"]', { element: (e) => e.remove() })
    .on('meta[name="twitter:card"]', { element: (e) => e.remove() })
    .on('meta[name="twitter:title"]', { element: (e) => e.remove() })
    .on('meta[name="twitter:description"]', { element: (e) => e.remove() })
    .on('meta[name="twitter:image"]', { element: (e) => e.remove() })
    .on("head", {
      element(e) {
        e.append(
          `
<title>${t}</title>
<meta name="description" content="${d}">
<meta property="og:type" content="website">
<meta property="og:url" content="${canonical}">
<meta property="og:title" content="${t}">
<meta property="og:description" content="${d}">
<meta property="og:image" content="${img}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${t}">
<meta name="twitter:description" content="${d}">
<meta name="twitter:image" content="${img}">
`,
          { html: true }
        );
      },
    })
    .transform(res);

  // Important: vary by UA, otherwise caching can mix bot/non-bot
  const out = new Response(rewritten.body, rewritten);
  out.headers.set("Vary", "User-Agent");
  out.headers.set("x-og-rewrite", "1"); // debug
  return out;
}
