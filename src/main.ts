import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = app.get(ConfigService).get('PORT');
  await app.listen(PORT);
  console.log(`🚀 Server started at http://localhost:${PORT}`);
}
bootstrap();
