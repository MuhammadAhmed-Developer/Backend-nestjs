import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";


interface todoDTO {
    id:number
    name:string
}

const todolist:todoDTO[] = []

@Controller("/user")
export class UserController{

   @Post("/addtodo")
   AddTodo(@Body() data:todoDTO){
      const already = todolist.find((item)=> data.id === item.id)
      if(!already){
          todolist.push(data)
        return "user Added"
      }else{
        return "Id alredy exist"
      }
       
   }

   @Put("/updatetodo/:id")
   UpdateTodo(@Param("id") id, @Body() data:todoDTO){
       const index = todolist.findIndex((item)=>  id == item.id)
       if(index !== -1){
        todolist[index] = data
        return "Todo Updated Successfully"
       }else{
          return "Todo Not Found";
       }

   }

   @Delete("/remove/:id")
   DeleteTodo(@Param("id") id){
    const index = todolist.findIndex((item)=>  id == item.id)
    console.log(index)
    if (index !== -1) {
        todolist.splice(index, 1); // 🔥 Remove the item at that index
        return "Todo Deleted Successfully";
    } else {
        return "Todo Not Found";
    }
   }

   @Get("/gettodos")
   getTodos(){
    return todolist
   }
}