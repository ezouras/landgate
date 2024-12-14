import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { PeopleComponent } from "./people.component";
import { EditPersonComponent } from "./edit-person/edit-person.component";
const routes: Routes = [
  {
    path: "",
    component: PeopleComponent,
  },
  { path: "editPerson", component: EditPersonComponent },
];
@NgModule({
  declarations: [PeopleComponent, EditPersonComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule,
    FormsModule,
  ],
  exports: [RouterModule],
})
export class PeopleModule {}
