import {Service} from "./service.model";
import {Booking} from "./booking.model";
import {Injectable} from "@angular/core";


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
  constructor() {
  }

  setUser(handyman: Handyman){
    this.currentUser = handyman;
  }

  getUser(): Handyman | null{
    return this.currentUser;
  }
}

