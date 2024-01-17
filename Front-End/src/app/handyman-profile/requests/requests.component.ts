import { Component } from '@angular/core';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrl: './requests.component.css'
})
export class RequestsComponent {
  requests: any[] = [
    { description: 'Request 10',
      status: 'Pending',
      date: '2021-01-01',
      user: 'User 1',
      servicetype: 'Service Type 1',
      time: '10:00 AM'
    },
    { description: 'Request 10',
      status: 'Pending',
      date: '2021-01-01',
      user: 'User 1',
      servicetype: 'Service Type 1',
      time: '10:00 AM'
    },

  ];

  acceptRequest(request: any) {
    // Add your logic for accepting the request here
    console.log(`Accepted: ${request.description}`);
  }

  declineRequest(request: any) {
    // Add your logic for declining the request here
    console.log(`Declined: ${request.description}`);
  }
}
