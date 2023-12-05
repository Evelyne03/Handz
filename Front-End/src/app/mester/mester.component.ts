import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  onSubmit(form: NgForm) {
    if (form.valid) {
      // Your logic to handle the form submission
      // This might involve sending a request to a server or handling data processing
      console.log('Form Data:', this.mester);
    } else {
      // Handle the case where the form is not valid
      console.log('Form is not valid');
    }
  }

  // Optional: Any additional methods related to this component
}
