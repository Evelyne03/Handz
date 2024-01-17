import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Handyman } from "../Models/handyman.model";
import { MatDialog } from "@angular/material/dialog";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/portal';
import { MatDialogModule} from "@angular/material/dialog";
import { Service } from '../Models/service.model';


@Component({
  selector: 'app-make-booking',
  templateUrl: './make-booking.component.html',
  styleUrls: ['./make-booking.component.css']
})
export class MakeBookingComponent implements OnInit {
  services = ['Plumber', 'Electrician', 'Locksmith'];
  selectedService = '';
  handymen: Handyman[] = [];
  //serviceTypes: string[] = ['Change Light Bulb', 'Repair Cables'];
  serviceTypes: Service[] = [];
  availableTimes: string[] = [];

  constructor(private http: HttpClient, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.initializeAvailableTimes();
  }

  toggleBookingForm(handyman: any) {
    handyman.isExpanded = !handyman.isExpanded;
  }



  @ViewChild('confirmationDialog') confirmationDialog!: TemplateRef<any>;


  completeReservation(handyman: any): void {
    this.dialog.open(this.confirmationDialog);


    this.handymen = this.handymen.filter(h => h !== handyman);
  }

  preventGlitch(event: Event): void {
    event.preventDefault();
    event.stopPropagation();

  }

  initializeAvailableTimes(): void {
    for (let hour = 8; hour <= 18; hour++) {
      this.availableTimes.push(`${hour}:00`);

    }
  }

  fetchServicesMocked(handymanId:number):void {
    this.http.get<Service[]>('http://localhost:8080/api/services/all/'+handymanId).subscribe(data => {
      this.serviceTypes = data;
    });
  }

  fetchHandymenMocked(): void {
    this.http.get<Handyman[]>('http://localhost:8080/api/handyman/all').subscribe(data => {
      this.handymen = data;
    });
  }

  toggleCardExpansion(handyman: Handyman): void {
    handyman.isExpanded = !handyman.isExpanded;
  }

  submitBookingForm(handyman: Handyman): void {

    const bookingData = {
      serviceType: handyman.selectedServiceType,
      date: handyman.selectedDate,
      time: handyman.selectedTime,
      handymanId: handyman.id,
      reviewText: handyman.reviewText,
      starRating: handyman.starRating
    };

    // Here you would send the booking data to your server
    this.http.post('/api/bookings', bookingData).subscribe(response => {
      handyman.showBookingConfirmation = true;
    });
  }


}

