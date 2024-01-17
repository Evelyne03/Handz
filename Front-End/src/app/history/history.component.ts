import { Component, OnInit } from '@angular/core';

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

  constructor() {
  }

  ngOnInit(): void {
    this.loadHistory();
  }

  leaveReview(index: number): void {
    this.history[index].showReview = !this.history[index].showReview;
  }
  loadHistory(): void {
    // Mock data for history items
    this.history = [
      {serviceType: 'Plumbing', date: '2024-01-14', handymanName: 'John Doe', status: 'Finished'},
      {serviceType: 'Electrical', date: '2024-01-12', handymanName: 'Jane Smith', status: 'Cancelled'},
      {serviceType: 'Landscaping', date: '2024-01-10', handymanName: 'Mike Johnson', status: 'In Progress'}
      // Add more items as necessary
    ];
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

