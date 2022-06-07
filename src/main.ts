import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();


/**
 * TODO
 * - bisa di pasang interseptor ga ya buat resolver
 * - scalar itu apa ?
 * - containerzation
 */