import Script from "next/script";

/**
 * Privacy-friendly, cookie-less analytics that works on static hosting
 * (GitHub Pages) — unlike Vercel Analytics, which needs Vercel's runtime.
 *
 * Set the GoatCounter site code via NEXT_PUBLIC_GOATCOUNTER (defaults to
 * "brunoliserre"). Register the free subdomain at https://www.goatcounter.com
 * — until then the counting pixel just 404s silently and nothing breaks.
 * Set NEXT_PUBLIC_GOATCOUNTER="" to disable analytics entirely.
 */
const CODE = process.env.NEXT_PUBLIC_GOATCOUNTER ?? "brunoliserre";

export default function Analytics() {
  if (!CODE) return null;

  return (
    <Script
      strategy="afterInteractive"
      data-goatcounter={`https://${CODE}.goatcounter.com/count`}
      src="//gc.zgo.at/count.js"
    />
  );
}
