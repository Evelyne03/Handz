import {Component, OnInit} from '@angular/core';
import {User} from "../../Models/user.model";
import {Handyman, HandymanService} from "../../Models/handyman.model";
import {Service} from "../../Models/service.model";
import {handleAutoChangeDetectionStatus} from "@angular/cdk/testing";
import {Booking, BookingComplex, BookingService} from "../../Models/booking.model";

import {HttpClient} from "@angular/common/http";

interface requestComplex{
  bookingId: number;
  user:User,
  handyman:Handyman,
  service:Service,
  bookingTime:Date,
  description:string,
  status:string,
}

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrl: './requests.component.css'
})



export class RequestsComponent implements OnInit{

  handyman: Handyman | null = this.handymanService.getUser();

requests: requestComplex[] = [
    ];

    constructor(private handymanService: HandymanService, private bookingService: BookingService,
                private http: HttpClient) {

    }

    fetchBookings(){
      if(this.handyman != null){
        this.bookingService.getBookingsbyHandymanId(this.handyman?.id).subscribe((bookings: BookingComplex[]) => {
          this.requests = [];
            bookings.forEach((booking: BookingComplex) => {
              if(booking.status === 'Pending')
            this.requests.push({
              bookingId: booking.bookingId,
                user: booking.user,
                handyman: booking.handyman,
                service: booking.service,
              description: booking.service.description.toString(),
                bookingTime: booking.bookingTime,
                status: booking.status,
            });

            console.log(this.requests);

            });
        });
    }
    }

  acceptRequest(request: any) {
    console.log(`Accepted: ${request.description}`);
    request.status = 'Confirmed';

    this.fetchBookings();
  }

  declineRequest(requests: any) {
    console.log(`Declined: ${requests.description}`);
    requests.status = 'Declined';
    // @ts-ignore
    this.http.get('http://localhost:8080/api/bookings/decline-booking/' + requests.bookingId).subscribe((data: BookingComplex) => {

    });

    this.fetchBookings();
  }

  confirmRequest(requests: any) {
      console.log(requests);
    requests.status = 'Confirmed';
      // @ts-ignore
    this.http.get('http://localhost:8080/api/bookings/confirm-booking/' + requests.bookingId).subscribe((data: BookingComplex) => {

  });

    this.fetchBookings();

    }


  ngOnInit(): void {
    this.fetchBookings();
  }
}
