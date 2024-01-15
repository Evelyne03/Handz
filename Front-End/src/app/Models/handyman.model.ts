import {Service} from "./service.model";
import {Booking} from "./booking.model";
import {Injectable} from "@angular/core";


export interface Handyman {
  reservationCompleted: boolean;
  selectedServiceType?: string;
  selectedDate?: string;
  selectedTime?: string;
  id: number;
  isExpanded: boolean;
  showBookingConfirmation: any;
  handymanId: number;
  name: string;
  email: string;
  password: string;
  imageURL: string;
  phoneNumber: number;
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

