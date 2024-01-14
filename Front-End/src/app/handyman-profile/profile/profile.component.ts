import { Component } from '@angular/core';
import {Handyman, HandymanService} from "../../Models/handyman.model";
import {UserService} from "../../Models/user.model";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  handymanInfo: any;

  constructor(private user:UserService) {
  }

  ngOnInit(){
    if(this.user.getUser())
      this.handymanInfo = this.user.getUser()
  }

}
