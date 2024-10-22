import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { AddCarComponent } from 'src/app/add-car/add-car.component';
import { MatDialog } from '@angular/material/dialog'; 
import { Router } from '@angular/router';



@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars:any;
  showSuccessAlert: boolean = false;
  successMessage: string = '';
  constructor(private dataservice:DataService,
    private _dialog: MatDialog ,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getCarsData();
  }
getCarsData(){
  this.dataservice.getData().subscribe(res => {
    this.cars=res;
  });
}

Openform(): void {
  const dialogRef = this._dialog.open(AddCarComponent);
  dialogRef.afterClosed().subscribe(() => {
    this.getCarsData();
    this.router.navigate(['/list']); 

  });
}
deleteData(id: any): void {
  if (confirm('Are you sure you want to delete this car?')) {
    this.dataservice.deleteData(id).subscribe(
      (res: any) => {
        console.log(res);
        this.successMessage = 'Data deleted successfully!';
        this.showSuccessAlert = true;
        setTimeout(() => {
          this.showSuccessAlert = false; // Hide the alert after a few seconds
        }, 2000); // Display alert for 2 seconds
        this.getCarsData(); // Refresh the list of cars
      },
      (error) => {
        console.error('Error deleting data:', error);
      }
    );
  }
}
OpenEdit(data:any){
  const dialogRef = this._dialog.open(AddCarComponent,{
    data,
  });
  dialogRef.afterClosed().subscribe(() => {
    this.getCarsData();
    this.router.navigate(['/list']);

  });
 
}
}
