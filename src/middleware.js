import { NextResponse } from 'next/server'

export function middleware(request) {
  const authCookie = request.cookies.get('portfolio_auth')

  if (authCookie?.value === 'granted') {
    return NextResponse.next()
  }

  const url = request.nextUrl.clone()
  url.pathname = '/locked'
  return NextResponse.rewrite(url)
}

export const config = {
  // Runs on every request except static assets, the lock page itself,
  // and the unlock API route (those would otherwise redirect in a loop).
  matcher: ['/((?!_next|favicon.ico|locked|api/unlock).*)'],
}
