import { EventListenerFocusTrapInertStrategy } from "@angular/cdk/a11y";
import { Injectable } from "@angular/core";
import { Observable, of, ReplaySubject, Subject } from "rxjs";
import { publishReplay, share, shareReplay } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class DeviceService {
  private isMobile$ = new ReplaySubject<boolean>(1);

  constructor() {}

  getIsMobile(): Observable<boolean> {
    return this.isMobile$.asObservable();
  }

  setIsMobile(isMobile: boolean): void {
    this.isMobile$.next(isMobile);
  }
}
