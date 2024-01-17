import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Handyman } from "../Models/handyman.model";
import { MatDialog } from "@angular/material/dialog";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/portal';
import { MatDialogModule} from "@angular/material/dialog";

@Component({
  selector: 'app-make-booking',
  templateUrl: './make-booking.component.html',
  styleUrls: ['./make-booking.component.css']
})
export class MakeBookingComponent implements OnInit {
  services = ['Plumber', 'Electrician', 'Locksmith'];
  selectedService = '';
  handymen: Handyman[] = [];
  serviceTypes: string[] = ['Change Light Bulb', 'Repair Cables'];
  availableTimes: string[] = [];

  constructor(private http: HttpClient, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.initializeAvailableTimes();
  }

  toggleBookingForm(handyman: any) {
    handyman.isExpanded = !handyman.isExpanded; // This toggles the isExpanded property
  }



  @ViewChild('confirmationDialog') confirmationDialog!: TemplateRef<any>;


  completeReservation(handyman: any): void {
    this.dialog.open(this.confirmationDialog);

    // Remove the handyman from the list
    this.handymen = this.handymen.filter(h => h !== handyman);
  }

  preventGlitch(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    // Add any additional logic you might need here
  }

  initializeAvailableTimes(): void {
    for (let hour = 8; hour <= 18; hour++) {
      this.availableTimes.push(`${hour}:00`);
      // Include half-hour intervals if needed
      // this.availableTimes.push(`${hour}:30`);
    }
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
    // Add your booking submission logic here
    const bookingData = {
      serviceType: handyman.selectedServiceType,
      date: handyman.selectedDate,
      time: handyman.selectedTime,
      handymanId: handyman.id, // Replace 'id' with the correct property from your Handyman model
      reviewText: handyman.reviewText, // Include the review text
      starRating: handyman.starRating // Include the star rating
    };

    // Here you would send the booking data to your server
    this.http.post('/api/bookings', bookingData).subscribe(response => {
      // Process the response here
      handyman.showBookingConfirmation = true;
    });
  }


}

