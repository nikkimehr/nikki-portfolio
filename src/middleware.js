import { NextResponse } from 'next/server'

export function middleware(request) {
  const basicAuth = request.headers.get('authorization')
  
  if (basicAuth) {
    const auth = basicAuth.split(' ')[1]
    const [user, password] = atob(auth).split(':')
    if (password === 'KiwiLeo') {
      return NextResponse.next()
    }
  }

  return new NextResponse('Protected', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Portfolio"',
    },
  })
}

export const config = {
  matcher: ['/((?!_next|favicon.ico).*)'],
}