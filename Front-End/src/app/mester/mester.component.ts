import { Component } from '@angular/core';
import {NgForm, NgModel} from '@angular/forms';
import { RegHandymanService } from '../reg-handyman.service';
import {Handyman, HandymanService} from "../Models/handyman.model";

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

  constructor(private handymanService: HandymanService, private regService: RegHandymanService) { }

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

    const val = parseInt(this.mester.phoneNumber, 10);
    if (form.valid && this.mester.name && this.mester.email && this.mester.password && this.mester.phoneNumber && this.mester.service && this.mester.imageURL) {
      this.regService.registerHandyman(this.mester.name, this.mester.email, this.mester.password, 'aaaaaa',  parseInt(this.mester.phoneNumber))
        .subscribe((handymanData) => {
          if (handymanData) {
            console.log("Handyman registered successfully");
            this.handymanService.setUser(handymanData);
            console.log("HandymanData is: ", handymanData);
            // Additional logic after successful registration (e.g., navigate to another page)
          } else {
            console.log('Registration failed');
          }
        });
    } else {
      console.log('Form is not valid');
    }
  }

}
