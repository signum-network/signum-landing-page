// src/components/SeoHelmet.tsx
import { Helmet } from "react-helmet-async";

type SeoHelmetProps = {
  title: string;
  description: string;
  url?: string;
  image?: string;
  type?: string; // default: 'website'
  twitterHandle?: string; // optional, e.g. @Signum_Network
};

export default function SeoHelmet({
  title,
  description,
  url = "https://www.signum.network",
  image = "https://www.signum.network/og/og-preview.jpg",
  type = "website",
  twitterHandle = "@Signum_Network",
}: SeoHelmetProps) {
  return (
    <Helmet>
      {/* --- Basic SEO --- */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="robots" content="index, follow" />

      {/* --- Open Graph --- */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Signum Network" />

      {/* --- Twitter Card --- */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* --- Browser/UX --- */}
      <meta name="theme-color" content="#021851" />
    </Helmet>
  );
}
