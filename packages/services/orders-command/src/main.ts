import { NestFactory } from '@nestjs/core';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new FastifyAdapter());
  await app.listen(3001, '0.0.0.0');
}

bootstrap().catch((err) => {
  console.error('Error starting NestJS app:', err);
  process.exit(1);
});
