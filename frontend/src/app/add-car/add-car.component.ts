import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  name: string = '';
  num: string = '';
  showSuccessAlert: boolean = false;
  successMessage: string = '';


  constructor(
    private dialogRef: MatDialogRef<AddCarComponent>,
    private router: Router,
    private dataService: DataService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    if (this.data) {
      this.name = this.data.name || '';
      this.num = this.data.num || '';
    }
  }

  insertData(): void {
    if (this.name.trim() === '' || this.num.trim() === '') {
      console.error('Both fields are required');
      return;
    }

    const carData = { name: this.name, num: this.num };

    if (this.data) {
      // Update existing car
      this.dataService.updateData(this.data.id, carData).subscribe(
        (res: any) => {
          console.log(res);
          this.successMessage = 'Data updated successfully!';
          this.showSuccessAlert = true;
          setTimeout(() => {
            this.dialogRef.close(); // Close the dialog
          }, 2000); // Display alert for 2 seconds
        },
        (error) => {
          console.error('Error updating data:', error);
        }
      );
    } else {
      // Insert new car
      this.dataService.insertData(carData).subscribe(
        (res: any) => {
          console.log(res);
          this.successMessage = 'Data inserted successfully!';
          this.showSuccessAlert = true;
          setTimeout(() => {
            this.dialogRef.close(); // Close the dialog
          }, 2000); // Display alert for 2 seconds
        },
        (error) => {
          console.error('Error inserting data:', error);
        }
      );
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
