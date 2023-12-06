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
    phoneNumber: null,
    imageURL: ''
  };

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
      console.log('Form data:', form.value);
    }
  }
}
