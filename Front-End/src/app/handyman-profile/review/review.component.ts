import {Component, Injectable, OnInit} from '@angular/core';
import { User } from '../../Models/user.model';
import {HttpClient} from "@angular/common/http";
interface Review {
  userId: number;
  serviceId: number;
  handymanId: number;
  rating: number;
  comment: string;

}
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent implements OnInit{
  reviews: Review[] = [];
  canLeaveReview: boolean = true;

constructor(private http: HttpClient) { }

ngOnInit(): void {
  // Filter reviews to only include those with 'Finished' status
  //this.reviews = getAllReviewsOfHandyman(user.id);
  //this.reviews = this.reviews.filter(review => review.status === 'Confirmed');
}



  fetchReviews() {

  }

  sendReviewFromUser(user_id: number, serviceId: number | undefined, handymanId: number | undefined, rating: number | undefined, reviewText: string) {
    this.http.post('http://localhost:8080/api/reviews/add', {
        userId: user_id,
        serviceId: serviceId,
        handymanId: handymanId,
        rating: rating,
        comment: reviewText
        }).subscribe((data) => {
        console.log(data);
        });
    }
  }

@Injectable({
  providedIn: 'root'
})

export class ReviewService{
  private currentUser: Review | null = null;
  constructor() {
  }

  setUser(handyman: Review){
    this.currentUser = handyman;
  }

  getUser(): Review | null{
    return this.currentUser;
  }

  sendReviewFromUser(clientid: number, handymanid: number, review: Review){
  }

}



