import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {
  user = {
    name: '',
    email: '',
    password: '',
    imageURL: '',
    phoneNumber: '',
    bookings: []
  };
  constructor(private http: HttpClient) { }

  

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
  onSubmit() {
    const url = 'http://localhost:8080/api/user/add';
    this.http.post(url, this.user).subscribe(
      response => {
        console.log('Account created', response);
        // Handle the response here. Maybe navigate to a different page or show a success message.
      },
      error => {
        console.error('Error occurred while creating account', error);
        // Handle the error here. Maybe show an error message to the user.
      }
    );
  }
  
  onImageSelected(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList && fileList.length > 0) {
      const selectElement = event.target as HTMLSelectElement;
      this.user.imageURL = selectElement.value;
    }
  }

  
}
