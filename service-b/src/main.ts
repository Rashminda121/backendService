import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({
      level: 'debug',
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.printf(({ level, message, timestamp, context }) => {
              return JSON.stringify({
                timestamp,
                level,
                context: context || 'B-SERVICE',
                message,
              });
            }),
          ),
        }),
      ],
    }),
  });

  await app.listen(3001, '0.0.0.0');
  Logger.log('Service B is running on port 3001');
}

bootstrap();
