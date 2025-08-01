export async function GET() {
  const res = await fetch('https://va.vercel-scripts.com/v1/script.js')

  const body = await res.text()

  return new Response(body, {
    status: 200,
    headers: {
      'Content-Type': 'application/javascript',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
