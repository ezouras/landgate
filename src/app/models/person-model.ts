export class PersonModel {
  public firstName: string;
  public lastName: string;
  public age: number;
  public workTitle: string;

  constructor(dataIn: any) {
    this.firstName = dataIn.firstName;
    this.lastName = dataIn.lastName;
    this.age = dataIn.age;
    this.workTitle = dataIn.workTitle;
  }
}

export interface MailingListPerson {
  name: string;
  email: string;
}
