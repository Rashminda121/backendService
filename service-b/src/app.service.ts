import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {

  private readonly logger = new Logger('B-SERVICE');

  getHello(): string {
    return 'Hello World from ther service B!';
  }

  cartService() {
    this.logger.log('product service triggered from the controller');
    return 'Respone from the cart Service';
  }
}
