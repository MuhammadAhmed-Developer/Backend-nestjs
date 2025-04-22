import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from "@nestjs/common";
import { UserStore } from "./users.store";
import { Subject } from "rxjs";

@Controller("/user")
export class UserController{

    constructor(@Inject("EVENT_STORE") private eventbus: Subject<any>) {
        console.log(this.eventbus);
    }
  
}