import Script from 'next/script'

export function VercelSpeedInsights() {
  const isDev = process.env.NODE_ENV === 'development'

  const src = isDev
    ? 'https://va.vercel-scripts.com/v1/speed-insights/script.debug.js'
    : '/api/performance/script.js'

  return (
    <>
      <Script
        id='web-vitals'
        strategy='afterInteractive'
      >
        {`window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };`}
      </Script>
      <Script
        async
        src={src}
        strategy='lazyOnload'
      />
    </>
  )
}
