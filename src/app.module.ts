import { Injectable, Module } from '@nestjs/common';
import { ExampleController } from './example.controller';
import { UserController } from './user.controller';
import { AdminController } from './domain.controller';
import { UserStore } from './users.store';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable()
class EnvConfig {
   envType: "DEV" | "STAGE" | "PROD";
   constructor(){
      this.envType ="DEV";
   }
}


const IS_DEV = false;
@Module({
  controllers: [ExampleController, UserController, AdminController],
  providers: [{provide:"EVENT_STORE", useFactory:(congif:EnvConfig ,limit:number=3)=>{
   const eventBus$ = congif.envType==="DEV" ? new ReplaySubject(limit) : new BehaviorSubject(null);

   console.log( congif,limit)

    return eventBus$;
  },
inject:[EnvConfig,{token: "LIMIT", optional:true}],
},
EnvConfig,
{
  provide: "LIMIT",
  useValue: 3,

}
],
})
export class AppModule {}
