import { Component, OnInit } from '@angular/core';
import { HelloWorldService } from './hello-world.service';
import { Router } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import { MatDialog } from '@angular/material/dialog';


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

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The login dialog was closed');
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

  /*onAutentificareClick() {
    this.router.navigate(['/login']);
  }*/
}
