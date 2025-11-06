import { Helmet } from 'react-helmet-async'

type SEOProps = {
  title: string
  description: string
  url: string                // canonical, absolute (e.g. https://mecdesigner.com/)
  image: string              // absolute OG image
  locale?: string            // e.g. 'en_US'
  siteName?: string
  twitterSite?: string       // e.g. '@andreamecenero'
  robots?: string            // e.g. 'index, follow'
  googlebot?: string         // advanced rules
  bingbot?: string           // advanced rules
  // Tracking (optional)
  gaId?: string              // 'G-XXXX' (GA4) or 'UA-XXXX' (legacy)
  clarityId?: string         // 'td9hy31rz7'
}

export default function SEO({
  title,
  description,
  url,
  image,
  locale = 'en_US',
  siteName = 'Freelance UX UI Designer - Andrea Mecenero',
  twitterSite = '@andreamecenero',
  robots = 'index, follow',
  googlebot = 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  bingbot = 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  gaId,
  clarityId,
}: SEOProps) {
  const isProd = import.meta.env.PROD

  return (
    <>
      <Helmet>
        {/* Canonical */}
        <link rel="canonical" href={url} />

        {/* Basic meta */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content={robots} />
        <meta name="googlebot" content={googlebot} />
        <meta name="bingbot" content={bingbot} />

        {/* Open Graph */}
        <meta property="og:locale" content={locale} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:image" content={image} />
        <meta property="og:image:secure_url" content={image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:site" content={twitterSite} />
        <meta name="twitter:image" content={image} />

        {/* Google Analytics (GA4 or UA) */}
        {isProd && gaId && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}></script>
            <script>
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </script>
          </>
        )}

        {/* Microsoft Clarity */}
        {isProd && clarityId && (
          <script>
            {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${clarityId}");
            `}
          </script>
        )}
      </Helmet>
    </>
  )
}
