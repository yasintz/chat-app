import { Controller, Get } from '@nestjs/common';
import hasura from '../clients/graphql-request';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    hasura.request(`
    mutation A {
      insert_app_one(object:{name:"Deneme"}){
        id
      }
    } 
    `);
    return { message: 'Hello World' };
  }
}
