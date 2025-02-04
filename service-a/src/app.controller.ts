import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('service-a')
export class AppController {
  private readonly logger = new Logger('A-CONTROLLER');

  constructor(private readonly appService: AppService) {}

  @Get('hello-service-a')
  getHelloService() {
    this.logger.debug('Service A Hello Endpoint Got Triggered');
    return this.appService.helloServiceA();
  }

  @Get('item-service-a')
  getItemService() {
    this.logger.debug('Item Service Endpoint Got Triggered');
    return this.appService.itemService();
  }

  @Get('product-service-a')
  getProductService() {
    this.logger.debug('Product Service Endpoint Got Triggered');
    return this.appService.productService();
  }

  @Get('error-service-a')
  errorTrigger() {
    this.logger.debug('Trigger Service Endpoint Got Triggered');
    try {
      return this.appService.errorTrigger();
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
