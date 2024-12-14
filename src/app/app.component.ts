import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { distinctUntilChanged, tap } from "rxjs/operators";
import { DeviceService } from "./services/device.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "landgate-ui-test";
  breakpoint$;

  constructor(
    private deviceService: DeviceService,
    private breakpointObserver: BreakpointObserver,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.breakpoint$ = this.breakpointObserver
      .observe([
        //will observe when the viewpoint chnages between
        //media queries. xsmall or not xsmall
        // media query (xsmall) changes
        Breakpoints.XSmall,
        /*
        FOR REFERENCE ONLY - DEPENDING ON CUSTOMERS AND DEVICES USED
        Breakpoints.Small,
        Breakpoints.TabletLandscape,
        Breakpoints.TabletPortrait,
        Breakpoints.Large,
      Breakpoints.Medium,*/
      ])
      .pipe(distinctUntilChanged())
      .subscribe((resp) => {
        this.breakpointChanged();
      });
  }

  private breakpointChanged() {
    const isMobile = this.breakpointObserver.isMatched(Breakpoints.XSmall)
      ? true
      : false;
    this.deviceService.setIsMobile(isMobile);
  }
}
