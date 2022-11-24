/* eslint-disable */
// /**
//  * This is not a production server yet!
//  * This is only a minimal backend to get started.
//  */

// import { Logger } from '@nestjs/common';
// import { NestFactory } from '@nestjs/core';

// import { AppModule } from './app/app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   const globalPrefix = 'api';
//   app.setGlobalPrefix(globalPrefix);
//   const port = process.env.PORT || 3333;
//   await app.listen(port);
//   Logger.log(
//     `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
//   );
// }

// bootstrap();

const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
  res.send('Hello world ' + Math.random());
});

app.listen(process.env.PORT || 3000);

module.exports = app;
