import { Module } from '@nestjs/common';
import { ExampleController } from './example.controller';
import { UserController } from './user.controller';
import { AdminController } from './domain.controller';

@Module({
  controllers: [ExampleController, UserController, AdminController],
})
export class AppModule {}
