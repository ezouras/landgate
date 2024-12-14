import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs/internal/operators/filter";
@Component({
  selector: "app-footer-mobile",
  templateUrl: "./footer-mobile.component.html",
  styleUrls: ["./footer-mobile.component.scss"],
})
export class FooterMobileComponent implements OnInit {
  //closed is when step is equal to 1. open when it's 0
  //starts out closed and when (opened) it calls
  //method that sets it to 0
  steps = {
    step1: 1,
    step2: 1,
    step3: 1,
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((event) => {
        if (
          Object.keys(event).includes("url") &&
          event["url"].includes("people")
        ) {
          this.prevStep();
        }
      });
  }

  setStep(stepper: string, index: number) {
    this.steps[stepper] = 0;

    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight + document.body.offsetHeight,
        left: 0,
        behavior: "smooth",
      });
    }, 200);
  }

  nextStep(stepper) {
    this.steps[stepper]++;
  }

  prevStep() {
    //this closes all of the them. mgith
    //have been better to call it "closeStep"
    Object.keys(this.steps).forEach((key) => (this.steps[key] = 1));
  }
}
