import { Injectable } from "@nestjs/common";

interface User {
    id: number;
    name: string;
    age: number;
}
@Injectable()
export class UserStore{
  private store = new Map<number, User>();
  adduser(user: User){
    this.store.set(user.id, user);
  }

  getUser(id:number){
    return this.store.get(id);
  }

  getAllUsers(){
    return Array.from(this.store).map((_, user)=>user);
  }

  updateUser(id:number, user: User){
    this.store.set(id, user);
  }

  deleteUser(id:number){
    this.store.delete(id);
  } 
}