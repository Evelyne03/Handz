import { Component, OnInit } from '@angular/core';
import { HelloWorldService } from './hello-world.service';
import {LoginComponent} from "./login/login.component";
import { MatDialog } from '@angular/material/dialog';
import { ClientComponent} from "./client/client.component";
import { MesterComponent} from "./mester/mester.component";
import {filter} from "rxjs";
import { Router, Event as RouterEvent, NavigationEnd } from '@angular/router';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Handz';
  message: string;
  showMainContent = true;

  constructor(
    private helloWorldService: HelloWorldService,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.message = "loading...";
    this.showMainContent = true;

    this.router.events.pipe(
      filter((event: RouterEvent): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.showMainContent = event.url === '/';
    });
  }

  ngOnInit() {
    this.getHelloWorldMessage();
  }
  getHelloWorldMessage() {
    this.helloWorldService.getHelloWorldMessage().subscribe(data => {
      this.message = data;
    });
  }

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The login dialog was closed');
    });
  }

  openClientDialog(): void {
    const dialogRef = this.dialog.open(ClientComponent, {
      width: '50%',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The client dialog was closed');
    });
  }

  openMesterDialog(): void {
    const dialogRef = this.dialog.open(MesterComponent, {
      width: '50%', // Adjust as needed
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The mester dialog was closed');
      // Handle the dialog close if needed
    });
  }
}

