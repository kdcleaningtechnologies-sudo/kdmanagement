import React from "react";
import Script from "next/script";

interface GoogleAnalyticsProps {
  gaId?: string;
}

export const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({
  gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-N4323Q006W",
}) => {
  if (!gaId) return null;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script
        id="google-analytics-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
};
