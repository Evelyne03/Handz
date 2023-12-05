import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AppComponent} from "./app.component";
import { ClientComponent} from "./client/client.component";


const routes: Routes = [
  {
    path: '', component: AppComponent, children: [
      // ... other child routes if any
    ]
  },
  { path: 'create-client-account', component: ClientComponent } // Add this line for the client account creation route
  // ... other routes
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
