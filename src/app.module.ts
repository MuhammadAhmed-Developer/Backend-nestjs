import { Module } from '@nestjs/common';
import { ExampleController } from './example.controller';
import { UserController } from './user.controller';
import { AdminController } from './domain.controller';
import { UserStore } from './users.store';

@Module({
  controllers: [ExampleController, UserController, AdminController],
  providers: [{provide:UserStore,useClass:UserStore}],
})
export class AppModule {}
