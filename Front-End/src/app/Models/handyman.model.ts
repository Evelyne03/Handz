import {Service} from "./service.model";
import {Booking} from "./booking.model";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


export interface Handyman {
  reservationCompleted: boolean;
  showBookingConfirmation: boolean;
  reviewText: string;
  starRating: number;
  selectedServiceType?: string;
  selectedDate?: Date;
  selectedTime?: string;
  id: number;
  isExpanded: boolean;
  handymanId: number;
  name: string;
  email: string;
  password: string;
  imageURL: string;
  phoneNumber: string;
  services: Service[];
  bookings: Booking[];
}

@Injectable({
  providedIn: 'root'
})

export class HandymanService{
  private currentUser: Handyman | null = null;
  constructor(private http:HttpClient) {
  }

  setUser(handyman: Handyman){
    this.currentUser = handyman;
  }

  getUser(): Handyman | null{
    return this.currentUser;
  }

 getHandyman(handymanId: number): Observable<Handyman>{
    return this.http.get<Handyman>("http://localhost:8080/api/handyman/find/" + handymanId);
 }

 getHandymanByHandyman(handyman: Handyman): Observable<Handyman>{
    return this.http.get<Handyman>("http://localhost:8080/api/handyman/find/" + handyman.handymanId);
 }

 getHandymanByBookingId(bookingId: number): Observable<Handyman>{
    return this.http.get<Handyman>("http://localhost:8080/api/handyman/findbybookingid/" + bookingId);
 }
}

