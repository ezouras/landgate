import { Component, OnInit } from "@angular/core";
import { DeviceService } from "src/app/services/device.service";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  isMobile$;
  constructor(private deviceService: DeviceService) {}

  ngOnInit() {
    this.isMobile$ = this.deviceService.getIsMobile();
  }
}
