import { Component, OnInit } from '@angular/core';

interface ServiceHistory {
  serviceType: string;
  date: string;
  handymanName: string;
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
    // This should be replaced with actual data retrieval logic, e.g., from an API
    this.history = [
      { serviceType: 'Plumbing', date: '12/01/2024', handymanName: 'John Doe' },
      { serviceType: 'Electrician', date: '05/12/2023', handymanName: 'Jane Smith' },
      { serviceType: 'Locksmith', date: '20/11/2023', handymanName: 'Mike Johnson' }
      // Add more history items here
    ];
  }
}
