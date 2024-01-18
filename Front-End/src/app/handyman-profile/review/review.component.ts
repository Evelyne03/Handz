import {Component, Injectable, OnInit} from '@angular/core';
import { User } from '../../Models/user.model';
interface Review {
  clientName: string;
  date: Date;
  comment: string;
  status: 'Finished' | 'Cancelled';
  rating: number;
}
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent implements OnInit{
  reviews: Review[] = [];
  newReview: Review = { clientName: '', date: new Date(), comment: '', status: 'Finished', rating: 0 };
  canLeaveReview: boolean = true;

constructor() { }

ngOnInit(): void {
  // Filter reviews to only include those with 'Finished' status
  //this.reviews = getAllReviewsOfHandyman(user.id);
  this.reviews = this.reviews.filter(review => review.status === 'Finished');
}

}
export class HandymanReviewComponent {
}

@Injectable({
  providedIn: 'root'
})

class ReviewService{
  private currentUser: Review | null = null;
  constructor() {
  }

  setUser(handyman: Review){
    this.currentUser = handyman;
  }

  getUser(): Review | null{
    return this.currentUser;
  }
}



