import { Controller, Get, HostParam, Ip } from "@nestjs/common";

@Controller("/admin")
export class AdminController {
 @Get()
 getUsers(@Ip() ip){
    console.log(ip)
    return "Helo"
 }
}