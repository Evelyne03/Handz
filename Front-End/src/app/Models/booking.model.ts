import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Handyman} from "./handyman.model";

export interface Booking{
  bookingId: number;
  userId: number;
  handymanId:number;
  serviceId: number;
  bookingTime: Date;
  status: string;
  submitted: boolean;
  handyman:Handyman;
}

@Injectable({
    providedIn: 'root'
    })

export class BookingService{
    private currentBooking: Booking | null = null;
    private bookings: Booking[] = [];
    constructor(private http:HttpClient) {
    }

    setBooking(booking: Booking){
        this.currentBooking = booking;
    }

    getBooking(): Booking | null{
        return this.currentBooking;
    }

    setBookings(bookings: Booking[]){

    }

    getBookingsbyUserId(userId: number): Observable<Booking[]>{
        return this.http.get<Booking[]>("http://localhost:8080/api/bookings/all/" + userId);
    }

    getExpertise(bookingId: number): Observable<string>{
        return this.http.get<string>("http://localhost:8080/api/bookings/expertise/" + bookingId);
    }

    getHandymanId(bookingId: number): Observable<number>{
        return this.http.get<number>("http://localhost:8080/api/bookings/handymanid/" + bookingId);
    }
}

