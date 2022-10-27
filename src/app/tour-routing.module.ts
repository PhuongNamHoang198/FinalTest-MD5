import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {TourListComponent} from "./tour/tour-list/tour-list.component";
import {TourCreateComponent} from "./tour/tour-create/tour-create.component";
import {TourEditComponent} from "./tour/tour-edit/tour-edit.component";

const routes: Routes = [
  {
    path: '',
    component: TourListComponent
  },
  {
    path: "saveTour",
    component: TourCreateComponent
  },
  {
    path: "edit-tour/:id",
    component: TourEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TourRoutingModule {
}
