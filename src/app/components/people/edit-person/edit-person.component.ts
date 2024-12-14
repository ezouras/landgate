import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PersonModel } from "src/app/models/person-model";
import { PeopleService } from "src/app/services/people.service";

@Component({
  selector: "app-edit-person",
  templateUrl: "./edit-person.component.html",
  styleUrls: ["./edit-person.component.scss"],
})
export class EditPersonComponent implements OnInit {
  person: PersonModel;
  constructor(
    private peopleService: PeopleService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.person = JSON.parse(this.activatedRoute.snapshot.paramMap.get("user"));
  }
  saveUser() {
    this.peopleService.editPerson(this.person);
    this.router.navigate(["people"]);
  }
}
