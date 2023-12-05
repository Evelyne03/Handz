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
    image: null as any,
    imaegURL: '',
    phoneNumber: null, // Assuming phoneNumber can be null initially
    imageURL: '' // This can be set later, for example after uploading an image
  };

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

  onImageSelected(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList && fileList.length > 0) {
      this.user.image = fileList[0];

      // Optional: FileReader for image preview
      const reader = new FileReader();
      reader.onload = (e: any) => this.user.imageURL = e.target.result;
      reader.readAsDataURL(this.user.image);
    }
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      // Perform actions, such as sending data to a backend server
      console.log('Form data:', form.value);
      // Here you would typically have a service method to call the backend API
      // this.userService.createUser(this.user).subscribe(...);
    }
  }
}
