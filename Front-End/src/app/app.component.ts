import { Component, OnInit } from '@angular/core';
import { HelloWorldService } from './hello-world.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Start';
  message: string;

  constructor(private helloWorldService: HelloWorldService) {this.message = "loading..." }

  ngOnInit() {
    this.getHelloWorldMessage();
  }

  getHelloWorldMessage() {
    this.helloWorldService.getHelloWorldMessage().subscribe(data => {
      this.message = data;
    });
  }
}
