import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../auth.service';
import {NgForm, NgModel} from "@angular/forms";
import { Router} from "@angular/router";
import {HandymanService} from "../Models/handyman.model";
import {User, UserService} from "../Models/user.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userEmail: string = '';
  userPassword: string = '';

  constructor(public dialog: MatDialog, private authService: AuthService, private router: Router, private handy: HandymanService, private user: UserService) {
  }

  ngOnInit() {
    console.log('LoginComponent initialized');
  }

  onAutentificareClick() {
    this.authService.logindb(this.userEmail, this.userPassword).subscribe(
      (userData) => {
      if (userData) {
        console.log("merge aci");
        this.user.setUser(userData);
        console.log("UserData is: ", userData)
        this.router.navigate(['/client-info']);
        this.dialog.closeAll();
      } else {
        console.log('Login failed');
      }
    });
  }


  validateEmail(emailField: NgModel): void {
    if (emailField.value && !emailField.value.includes('@')) {
      emailField.control.setErrors({ 'invalidEmail': true });
    } else {
      if (emailField.errors && emailField.errors['invalidEmail']) {
        delete emailField.errors['invalidEmail'];
      }

      if (emailField.errors && Object.keys(emailField.errors).length === 0) {
        emailField.control.setErrors(null);
      }
    }
  }


  onSubmit(form: NgForm) {

    if (this.userEmail && this.userPassword) {
      const isLoginSuccess = this.authService.logindb(this.userEmail, this.userPassword);

      if (isLoginSuccess) {
        this.authService.logindb(this.userEmail, this.userPassword).subscribe(
          data =>{
            //console.log('Login succesfully', data)
          }
        )

      } else {
        console.log('Invalid credentials');
        console.log(form.value);
      }
    }

  }
}
