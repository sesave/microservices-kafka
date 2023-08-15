import { MicroserviceOptions, Transport } from "@nestjs/microservices";
import { AppModule } from "./app/app.module";
import { NestFactory } from "@nestjs/core";

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: ['localhost:9092'],
        },
        consumer: {
          groupId: 'auth-consumer',
        },
        producerOnlyMode: true,
      },
    }
  );
  await app.listen();
}

bootstrap();