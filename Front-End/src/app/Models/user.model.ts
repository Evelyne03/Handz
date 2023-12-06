import {Injectable} from "@angular/core";

export interface User{
  userId: number,
  name: string;
  email: string;
  password: string;
  imageURL: string;
  phoneNumber: number;
}

@Injectable({
  providedIn: 'root'
})

export class UserService{
  private currentUser: User | null = null;
  constructor() {
  }

  setUser(user: User){
    this.currentUser = user;
  }

  getUser(){
    return this.currentUser;
}
}
