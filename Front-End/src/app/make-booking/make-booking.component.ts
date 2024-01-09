import { Component } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Handyman, HandymanService} from "../Models/handyman.model";
import {MatDialog} from "@angular/material/dialog";


@Component({
  selector: 'app-make-booking',
  templateUrl: './make-booking.component.html',
  styleUrl: './make-booking.component.css'
})
export class MakeBookingComponent {
  services = ['Plumbering', 'Electrician', 'Picklocker'];
  selectedService = '';
  handymen: Handyman[] = [];

  constructor(private http: HttpClient, private dialog: MatDialog) {}

  onServiceSelect(service: string): void {
    this.selectedService = service;
  }

  fetchHandymen(): void {
    this.http.get<any>(`/api/handymen/${this.selectedService}`).subscribe(data => {
      this.handymen = data;
    });
  }

  fetchHandymenMocked():void{
    this.http.get<Handyman[]>('http://localhost:8080/api/handyman/all').subscribe(data=>{
      this.handymen = data;
    })
  }

  showConfirmation(handyman: any) {
    // Perform booking confirmation logic here (e.g., make an API call).
    // Once the booking is confirmed, set showBookingConfirmation to true.
    handyman.showBookingConfirmation = true;
  }




}
