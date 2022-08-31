import { Injectable, NestMiddleware } from '@nestjs/common';
import { join } from 'path';

@Injectable()
export class FrontendMiddleware implements NestMiddleware {
  use(req, res, next) {
    const { url } = req;
    if (url.indexOf('/api') === 1) {
      next(); 
    } else {
      res.sendFile(join(__dirname, '..', '..', 'client', 'index.html'));
    }
  }
}
