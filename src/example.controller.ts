import { Body, Controller, Get, Headers, Param, Post, Query, Redirect, Req } from "@nestjs/common";
@Controller("/example")
export class ExampleController {

    @Get("/profile")
    @Redirect("/users/account")
    getProfile(){

        const rn = Math.random() * 10 +1
        if(rn < 5){
            return {
                url :"/users/account", 
                statusCode:302
            }
        }else{
            return {
                url :"/users/wallet", 
                statusCode:302
            }
        }   
        
    }

    @Get("/account")
    redirectRoute(){
        return "working account";
    }
    @Get("/wallet")
    wallet(){
        return "working wallet";
    }
    @Get("/videos/:id")
    GetParams(@Param("id") Params:Record<string, any>){
        //  console.log(Params)
        return "video";
    }
    @Get("/post")
    GetQuery(@Query() query:Record<string, any>){
        //  console.log(query)
        return "video";
    }
    @Get("/token")
    GetHeaders(@Headers("host") headers:Record<string, any>){
        //  console.log(headers)
        return "video";
    }


    @Post("/data")
    GetBody(@Body() body:Record<string, any>){
        console.log(body)
       return "success"
    }
}