import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppService {
  private readonly logger = new Logger('A-SERVICE');

  constructor(private readonly httpSerive: HttpService) {}

  helloServiceA() {
    this.logger.log('Hello service triggered from the controller');
    return 'Hello From the Service A';
  }

  itemService() {
    this.logger.log('Item service triggered from the controller');
    return 'Respone from the Item Serive';
  }

  async productService() {
    this.logger.log('product service triggered from the controller');
    const response = await axios.get('http://service-b-demo.demo-namespace-b.svc.cluster.local:3000/service-b/cart-service-b')
    this.logger.log(`Respose Recieved from the Service B is ${JSON.stringify(response.data)}`);
    return 'Respone from the product Serive';
  }

  errorTrigger() {
    this.logger.error('Error Function triggered from the controller');
    throw new Error('Service A Error Trigger Successfully');
  }
}
