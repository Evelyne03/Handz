import { Component } from '@angular/core';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrl: './requests.component.css'
})
export class RequestsComponent {
  requests: any[] = [
    { description: 'Request 1' },
    { description: 'Request 2' },
    { description: 'Request 3' }
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
