import { NestFactory } from '@nestjs/core';
import {SwaggerModule, DocumentBuilder} from '@nestjs/swagger'
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const option = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API Description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, option);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
