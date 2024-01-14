import { Component, OnInit } from '@angular/core';

interface ServiceHistory {
  serviceType: string;
  date: string;
  handymanName: string;
  status: string; // Add this line
}

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  history: ServiceHistory[] = [];

  constructor() { }

  ngOnInit(): void {
    this.loadHistory();
  }

  loadHistory(): void {
    this.history = [


      // ... other history items
    ];
  }

  leaveReview(item: ServiceHistory): void {
    // Logic for leaving a review
    console.log('Leaving review for:', item);
  }


}
