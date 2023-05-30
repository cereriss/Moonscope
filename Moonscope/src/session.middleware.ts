import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import * as session from 'express-session';

@Injectable()
export class SessionMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    session({
      secret: 'your-secret-key',
      resave: false,
      saveUninitialized: false,
      cookie: { secure: false }, // Set secure to true if using HTTPS
    })(req, res, next);
  }
}
