import { Component } from '@angular/core';
import {NgForm, NgModel} from '@angular/forms';

@Component({
  selector: 'app-mester',
  templateUrl: './mester.component.html',
  styleUrls: ['./mester.component.css']
})
export class MesterComponent {
  mester = {
    name: '',
    email: '',
    password: '',
    image: null as any,
    imageURL: '',
    phoneNumber: '',
    service: ''
  };

  constructor() { }

  onImageSelected(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList && fileList.length > 0) {
      this.mester.image = fileList[0];

      // FileReader for preview
      const reader = new FileReader();
      reader.onload = (e: any) => this.mester.imageURL = e.target.result;
      reader.readAsDataURL(this.mester.image); // No error as mester.image is guaranteed to be a File object
    }
  }


  validateEmail(emailField: NgModel): void {
    if (emailField.value && typeof emailField.value === 'string' && !emailField.value.includes('@')) {
      emailField.control.setErrors({ 'invalidEmail': true });
    } else {
      this.clearInvalidEmailError(emailField);
    }
  }

  clearInvalidEmailError(emailField: NgModel) {
    if (emailField.errors && emailField.errors['invalidEmail']) {
      delete emailField.errors['invalidEmail'];
      if (Object.keys(emailField.errors).length === 0) {
        emailField.control.setErrors(null);
      }
    }
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      // Your logic to handle the form submission
      // This might involve sending a request to a server or handling data processing
      console.log('Form Data:', this.mester);
      window.open('google.com', '_blank');
    } else {
      // Handle the case where the form is not valid
      console.log('Form is not valid');
    }
  }
}
