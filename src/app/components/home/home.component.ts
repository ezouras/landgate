import { Component, OnInit } from "@angular/core";
import { DeviceService } from "src/app/services/device.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  isMobile$;
  constructor(private deviceService: DeviceService) {}

  ngOnInit() {
    this.isMobile$ = this.deviceService.getIsMobile();
  }
}
