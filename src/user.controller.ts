import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserStore } from "./users.store";

@Controller("/user")
export class UserController{

    constructor(private store: UserStore){
        console.log(this.store);
    }
  
}