import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filter/httpException.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
}
bootstrap();


/**
 * TODO
 * - bisa di pasang interseptor ga ya buat resolver [v]
 * - scalar itu apa ?
 * - containerzation
 */