import { Injectable } from "@angular/core";
import { delay } from "rxjs/operators";
import { Observable, ReplaySubject } from "rxjs";
import { MailingListPerson, PersonModel } from "../models/person-model";

@Injectable({
  providedIn: "root",
})
export class PeopleService {
  private people$ = new ReplaySubject<PersonModel[]>();
  private peopleObjs: PersonModel[];
  private mockPeopleList = [
    {
      firstName: "John",
      lastName: "Doe",
      age: "21",
      workTitle: "Wanna be Signer",
    },
    { firstName: "Jane", lastName: "Doe", age: "22", workTitle: "Signer" },
    { firstName: "Bob", lastName: "Barker", age: "80", workTitle: "TV Host" },
    {
      firstName: "John",
      lastName: "Doe",
      age: "21",
      workTitle: "Wanna be Signer",
    },
  ];

  constructor() {
    this.peopleObjs = this.mockPeopleList.map((p) => new PersonModel(p));
    this.people$.next(this.peopleObjs);
  }

  getPeople(): Observable<PersonModel[]> {
    return this.people$.pipe(delay(1000));
  }

  editPerson(updatedPerson: PersonModel) {
    let person = this.peopleObjs[updatedPerson["index"]];
    //will replace all properties that exit in updated person
    //and add any new ones to "person"
    Object.assign(person, updatedPerson);
    this.people$.next(this.peopleObjs);
  }

  addPersonToMailingList(person: MailingListPerson) {}
}
