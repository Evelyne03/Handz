import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface Service{
  serviceId: number;
  expertise: String;
  availability: String;
  price: number;
  description:String;
}

@Injectable({
    providedIn: 'root'
    })

export class ServiceService{
    private currentService: Service | null = null;
    private services: Service[] = [];
    constructor(private http:HttpClient) {
    }

    setService(service: Service){
        this.currentService = service;
    }

    setServices(services: Service[]){

    }

    getServices(): Service[]{
        return this.services;
    }

    getService(serviceId: number): Observable<Service>{
      return this.http.get<Service>("http://localhost:8080/api/services/find/" + serviceId);
    }

    getServiceByBookingId(bookingId: number): Observable<Service>{
        return this.http.get<Service>("http://localhost:8080/api/services/findbybookingid/" + bookingId);
    }
}
