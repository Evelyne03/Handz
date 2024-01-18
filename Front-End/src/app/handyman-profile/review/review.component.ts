import {Component, Injectable, OnInit} from '@angular/core';
import { User } from '../../Models/user.model';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs/internal/Observable';
import { Handyman, HandymanService } from '../../Models/handyman.model';

interface Review {
  clientName: string;
  date: Date;
  comment: string;
  rating: number;
}
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent implements OnInit{
  reviews: Review[] = [];
  newReview: Review = { clientName: '', date: new Date(), comment: '', rating: 0 };
  canLeaveReview: boolean = true;
  handyman = this.service.getUser();

constructor(private http:HttpClient,private service: HandymanService,private rservice:ReviewService) { }

ngOnInit(): void {
  // @ts-ignore
  // Filter reviews to only include those with 'Finished' status
}  

fetchReviews(): void {
  console.log(this.handyman);
  if(this.handyman!=null){
    console.log("metoda");
    console.log(this.handyman);
    this.http.get<Review[]>('http://localhost:8080/api/reviews/handyman/'+this.handyman.id).subscribe(data => {
    this.reviews = data;
    console.log(data);
  });
  }
  
}
}

export class HandymanReviewComponent {
}



@Injectable({
  providedIn: 'root'
})

class ReviewService{
  private currentUser: Review | null = null;
  constructor(private http:HttpClient) {
  }

  
  
  getReviewbyHandymanId(handymanId: number): Observable<Review[]>{
    return this.http.get<Review[]>("http://localhost:8080/api/reviews/handyman/" + handymanId);
  }
  setUser(handyman: Review){
    this.currentUser = handyman;
  }

  getUser(): Review | null{
    return this.currentUser;
  }
}





