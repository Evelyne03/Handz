import { Component } from '@angular/core';
import {User, UserService} from "../Models/user.model";

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrl: './client-profile.component.css'
})
export class ClientProfileComponent {

  clientInfo: User | null = null;
  constructor(private user:UserService) {
  }

  ngOnInit(){
    if(this.user.getUser())
      this.clientInfo = this.user.getUser()
  }

}
