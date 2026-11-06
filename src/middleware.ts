import { NextResponse, type NextRequest } from 'next/server';

// Sends "/" to /en or /ar based on the visitor's browser language.
export function middleware(req: NextRequest) {
  const accept = req.headers.get('accept-language') || '';
  const locale = /^\s*ar\b/i.test(accept) ? 'ar' : 'en';
  return NextResponse.redirect(new URL(`/${locale}`, req.url));
}

export const config = { matcher: ['/'] };
