import { Component, OnInit } from '@angular/core';
import { HelloWorldService } from './hello-world.service';
import { Router } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import { MatDialog } from '@angular/material/dialog';
import { ClientComponent} from "./client/client.component";
import { MesterComponent} from "./mester/mester.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Handz';
  message: string;

  constructor(
    private helloWorldService: HelloWorldService,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.message = "loading...";
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

  /*onAutentificareClick() {
    this.router.navigate(['/login']);
  }*/
}
