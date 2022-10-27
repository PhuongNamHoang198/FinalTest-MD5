import { Component, OnInit } from '@angular/core';
import {TourService} from "../../service/tour.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-tour-create',
  templateUrl: './tour-create.component.html',
  styleUrls: ['./tour-create.component.css']
})
export class TourCreateComponent implements OnInit {

  constructor(private tourService : TourService) {
  }

  ngOnInit(): void {
  }

  tourForm : FormGroup = new FormGroup({
    title: new FormControl(),
    price: new FormControl(),
    description: new FormControl()
  })


  saveTour() {
   const tour = this.tourForm.value;
    console.log(tour);
   this.tourService.save(tour).subscribe(()=>{
     alert("Them thanh cong")
   });
   this.tourForm.reset();
  }
}
