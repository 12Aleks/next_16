import {NextResponse} from 'next/server';
import type {NextRequest} from 'next/server'

export function proxy(request: NextRequest){
  const checkUrl = request.nextUrl;
  if(checkUrl.pathname === '/about'){
      return NextResponse.redirect(new URL('/posts', request.url))
  }
   NextResponse.next()
}

// export const config = {
//     // matcher: ['/about']
//     matcher: '/'
// }