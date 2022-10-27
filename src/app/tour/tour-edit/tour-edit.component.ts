import { Component, OnInit } from '@angular/core';
import {TourService} from "../../service/tour.service";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-tour-edit',
  templateUrl: './tour-edit.component.html',
  styleUrls: ['./tour-edit.component.css']
})
export class TourEditComponent implements OnInit {
  id: number;
  tourForm: FormGroup ;
  constructor(private tourService : TourService, private activateRoute: ActivatedRoute) {
    this.activateRoute.paramMap.subscribe((paraMap: ParamMap) => {

      this.id = +paraMap.get('id');
      this.getTour(this.id);
    })
  }

  ngOnInit(): void {
  }

  getTour(id : number){
    return this.tourService.findById(id).subscribe(tour =>{
      this.tourForm = new FormGroup({
        id: new FormControl(tour.id),
        title: new FormControl(tour.title),
        price: new FormControl(tour.price),
        description: new FormControl(tour.description)
      })
    })
  }

  editTour(){

    const editTour = this.tourForm.value
    this.tourService.edit(editTour.id,editTour).subscribe(()=>{
      alert("Cap nhat thanh cong");
    })
  }
}
