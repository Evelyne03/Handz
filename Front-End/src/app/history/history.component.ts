import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from "../Models/user.model";
import {BookingService} from "../Models/booking.model";
import {ServiceService} from "../Models/service.model";
import {HandymanService} from "../Models/handyman.model";
import {catchError, forkJoin, mergeMap, of} from "rxjs";
import {Booking} from "../Models/booking.model";

interface ServiceHistory {
  serviceType: string;
  date: string;
  handymanName: string;
  status: string;
  showReview?: boolean;
  rating?: number;
  submitted?: boolean;
}

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  history: ServiceHistory[] = [];
  showReviewForm: boolean = false;
  user = this.service.getUser()
  // @ts-ignore
  //handymanId = this.bookingService.getBooking().handymanId;
  //handyman = this.handymanService.getHandyman(this.handymanId);
  handymanName = "John Doe";
  bookings: Booking[] = [];
  handymanNames: string[] = [];
  step:number = 0;

  constructor(private service: UserService, private bookingService: BookingService, private router: Router,
              private serviceService: ServiceService, private handymanService: HandymanService) {
  }

  ngOnInit(): void {
    this.loadHistory();
  }

  leaveReview(index: number): void {
    this.history[index].showReview = !this.history[index].showReview;
  }
  loadHistory(): void {
    if(this.user!=null)
    {
        this.bookingService.getBookingsbyUserId(this.user.user_id).subscribe((bookings: Booking[]) => {
            this.bookings = bookings;
            console.log("Bookings are: ", this.bookings);
            this.bookings.forEach((booking: Booking) => {
              booking.bookingId = bookings[this.step].bookingId;
              this.step +=1;
              console.log("Booking is: ", booking);
            this.serviceService.getService(booking.serviceId).subscribe((service) => {
                this.handymanService.getHandyman(booking.handymanId).subscribe((handyman) => {
                this.handymanNames.push(handyman.name);
                this.history.push({
                    serviceType: "",
                    date: booking.bookingDate.toString(),
                    handymanName: handyman.name,
                    status: booking.status,
                    showReview: false,
                    rating: undefined,
                    submitted: false
                });
                });
            });
            });
        });
    }

  }

  toggleReviewForm(index: number): void {
    if (!this.history[index].submitted) {
      this.history[index].showReview = !this.history[index].showReview;
    }
  }

  setRating(item: ServiceHistory, rating: number): void {
    if (!item.submitted) {
      item.rating = rating;
    }
  }


  submitReview(index: number): void {
    const item = this.history[index];
    if (item.submitted) {
      alert('You have already submitted a review for this service.');
      return;
    }

    const reviewTextElement = document.getElementById(`reviewText-${index}`) as HTMLInputElement;
    const reviewText = reviewTextElement.value;
    const rating = item.rating;


    if (reviewText && rating) {
      if (confirm('Are you sure you want to submit this review?')) {
        console.log('Review Submitted:', reviewText, 'Rating:', rating);
        reviewTextElement.value = '';
        item.rating = undefined;
        item.submitted = true;
        item.showReview = false;
        alert('Thank you for your review!');
      }
    } else {
      alert('Please complete both the review text and star rating before submitting.');
    }
  }
}

