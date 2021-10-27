const allowedOrigins = [
  'https://www.lalemerkezi.com',
  'https://lalemerkezi.com',
  'https://lale-merkezi.pages.dev',
]

export const isAllowedOrigin = request => {
  const origin = request.headers.get('Origin')
  const foundOrigin = allowedOrigins.find(allowedOrigin =>
    allowedOrigin.includes(origin),
  )
  return foundOrigin ? true : false
}

export const checkOrigin = request => {
  const origin = request.headers.get('Origin')
  const foundOrigin = allowedOrigins.find(allowedOrigin =>
    allowedOrigin.includes(origin),
  )
  return foundOrigin ? foundOrigin : allowedOrigins[0]
}

export const corsHeaders = origin => ({
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Allow-Methods': 'POST',
  'Access-Control-Allow-Origin': origin,
})

export const JsonResponse = (item, status, req) => {
  const allowedOrigin = checkOrigin(req)
  return new Response(JSON.stringify(item), {
    status,
    headers: {
      'content-type': 'application/json;charset=UTF-8',
      ...corsHeaders(allowedOrigin),
    },
  })
}
