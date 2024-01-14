import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class HandymanSettingsComponent {
  settingsForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.settingsForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      currentPassword: ['', Validators.required],
      newPassword: ['', Validators.required]
    });


    // Optionally, load existing user data here
  }

  onSubmit(): void {
    if (this.settingsForm.valid) {
      // Handle form submission, e.g., update user settings
      console.log(this.settingsForm.value);
      // Add your service call here
    }
  }

}


