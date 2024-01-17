import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule} from "@angular/forms";
import { User } from '../Models/user.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  settingsForm!: FormGroup;
  user : User | undefined;
  constructor(private formBuilder: FormBuilder,private http :HttpClient) { }

  ngOnInit(): void {
    this.settingsForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      currentPassword: ['', Validators.required],
      newPassword: ['', Validators.required]
    });

  }

  updateUser(user : User): void {
    console.log("metoda");
    if(this.settingsForm.valid){
      user.email= this.settingsForm.value.email;
      user.name = this.settingsForm.value.name;
      user.password = this.settingsForm.value.newPassword;
    }
    console.log(user);
    //this.http.put<User[]>('http://localhost:8080/api/user/update',user).subscribe(data => {
     // console.log(data);
   // });
  }

  onSubmit(): void {
    if (this.settingsForm.valid) {
      console.log(this.settingsForm.value);
    }
  }

}
