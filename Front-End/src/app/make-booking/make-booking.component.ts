import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Handyman } from "../Models/handyman.model";
import { MatDialog } from "@angular/material/dialog";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/portal';
import { MatDialogModule} from "@angular/material/dialog";
import { Service } from '../Models/service.model';
import {User, UserService} from "../Models/user.model";
import {Booking} from "../Models/booking.model";

@Component({
  selector: 'app-make-booking',
  templateUrl: './make-booking.component.html',
  styleUrls: ['./make-booking.component.css']
})
export class MakeBookingComponent implements OnInit {
  services = ['Plumber', 'Electrician', 'Locksmith'];
  selectedService = '';
  handymen: Handyman[] = [];
  serviceTypes: Service[] = [];
  availableTimes: string[] = [];
  user : User | null = this.service.getUser();
  xxx: string = "";
  bookingid: number = 0;
  booking: Booking | null = null;

  constructor(private http: HttpClient, private dialog: MatDialog, private service: UserService) {
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
    const selectedHandyman = this.handymen.find(h => h.id === handyman.id);
    this.handymen = this.handymen.filter(h => h !== handyman);
    if(selectedHandyman){
      const selectedDate = selectedHandyman.selectedDate;
        const selectedTime = selectedHandyman.selectedTime;;
        console.log(selectedDate, selectedTime);
      // @ts-ignore
      this.xxx = selectedHandyman.selectedServiceType.service_Id.toString();
      this.http.post<Booking>('http://localhost:8080/api/bookings/add/' + this.user?.user_id + "/" +
          handyman.id + "/" + this.xxx, "").subscribe(data => {
            this.bookingid = data.bookingId;
            this.booking = data;

        if (selectedDate) {
          data.bookingTime = selectedDate;
          this.booking.bookingTime = selectedDate;
        }
        this.http.put<Booking>("http://localhost:8080/api/bookings/update/" + data.bookingId , data).subscribe(data => {
          console.log(data);
        });
      });


    }


    if(selectedHandyman){
      // @ts-ignore
     // console.log();
    }

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

  fetchServices(handymanID : number): void {
    console.log("metoda");
    this.http.get<Service[]>('http://localhost:8080/api/handyman/allServices/'+handymanID).subscribe(data => {
      this.serviceTypes = data;
      console.log(data);
    });
  }
  fetchHandymenMocked(selected : string): void {
    this.http.get<Handyman[]>('http://localhost:8080/api/handyman/'+selected).subscribe(data => {
      this.handymen = data;
    });
  }

  toggleCardExpansion(handyman: Handyman): void {
    handyman.isExpanded = !handyman.isExpanded;
    this.fetchServices(handyman.id);
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

