import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CarsComponent } from './components/cars/cars.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddCarComponent } from './add-car/add-car.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { TeamComponent } from './components/team/team.component';
import { FpageComponent } from './components/fpage/fpage.component';
import { AuthComponent } from './components/auth/auth.component';

const appRoutes: Routes = [
  { path: 'list', component:CarsComponent},
  { path: 'team', component: TeamComponent } ,
  { path: '', component: FpageComponent } 
];

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    NavbarComponent,
    AddCarComponent,
    TeamComponent,
    FpageComponent,
    AuthComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
