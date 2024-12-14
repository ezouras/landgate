import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PeopleService } from "src/app/services/people.service";

@Component({
  selector: "app-people-component",
  templateUrl: "./people.component.html",
  styleUrls: ["./people.component.scss"],
})
export class PeopleComponent implements OnInit {
  people$;
  // TODO: Include the PersonService and get the list of People
  constructor(private peopleService: PeopleService, private router: Router) {}

  ngOnInit() {
    this.people$ = this.peopleService.getPeople();
  }

  userEdit(user, index) {
    user["index"] = index;
    this.router.navigate(["people/editPerson", { user: JSON.stringify(user) }]);
  }
}
