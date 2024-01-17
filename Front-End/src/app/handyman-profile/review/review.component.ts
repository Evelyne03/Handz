import {Component, OnInit} from '@angular/core';

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
  reviews: Review[] = [
  {
    clientName: 'John Doe',
    date: new Date('2024-01-14'),
    comment: 'Excellent service! Highly recommend.',
    status: 'Finished',
    rating: 5
  },
    {
      clientName: 'Jane Doe',
      date: new Date('2024-01-10'),
      comment: 'Ok,',
      status: 'Finished',
      rating: 3
    },
    {
      clientName: 'Papa Louie',
      date: new Date('2024-01-19'),
      comment: 'Very good service!',
      status: 'Finished',
      rating: 5
    },

];
  newReview: Review = { clientName: '', date: new Date(), comment: '', status: 'Finished', rating: 0 };
  canLeaveReview: boolean = true;

constructor() { }

ngOnInit(): void {
  // Filter reviews to only include those with 'Finished' status
  this.reviews = this.reviews.filter(review => review.status === 'Finished');
}

}
export class HandymanReviewComponent {
}
