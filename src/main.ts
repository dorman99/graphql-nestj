import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();


/**
 * TODO
 * - have some mapping response with graphql (?) is it possible ?
 * - caching with graphql
 * - containerzation
 */