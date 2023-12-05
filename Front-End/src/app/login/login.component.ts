import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../auth.service';
import {NgForm, NgModel} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // Define properties for email and password bound to form inputs
  userEmail: string = '';
  userPassword: string = '';


  // Inject AuthService into the component constructor
  constructor(public dialog: MatDialog, private authService: AuthService) {
  }


  ngOnInit() {
    console.log('LoginComponent initialized');
  }

  openLoginInNewWindow() {
    window.open('http://localhost:4200/login', '_blank');
  }

  onAutentificareClick() {
    this.openLoginInNewWindow();
  }

  validateEmail(emailField: NgModel): void {
    if (emailField.value && !emailField.value.includes('@')) {
      emailField.control.setErrors({ 'invalidEmail': true });
    } else {
      // This is important to clear the error if the email becomes valid
      if (emailField.errors && emailField.errors['invalidEmail']) {
        delete emailField.errors['invalidEmail'];
      }
      // If no other validators are failing and the invalidEmail was the only error,
      // we should also clear the errors completely by setting it to null
      if (emailField.errors && Object.keys(emailField.errors).length === 0) {
        emailField.control.setErrors(null);
      }
    }
  }

  // Method to handle form submission and validate the email
  onSubmit(form: NgForm) {
    // Here you would call authService.login with userEmail and userPassword
    if (this.userEmail && this.userPassword) { // Simple check for non-empty credentials
      const isLoginSuccess = this.authService.login(this.userEmail, this.userPassword);
      if (isLoginSuccess) {
        console.log('Login successful');
        // Redirect to dashboard or handle logged-in state
      } else {
        console.log('Invalid credentials');
        console.log(form.value);
      }
    }
  }



  // Method to log out the user
  logout() {
    this.authService.logout();
    console.log('User logged out');
    // Redirect to login page or handle logged-out state
  }
}
