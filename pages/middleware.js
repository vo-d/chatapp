// middleware.ts

import {User} from '../models/user_models.js'



export function middleware(req) {
  if (req.nextUrl.pathname.startsWith('/api/user/register')) {
    req.model = User
  }
}