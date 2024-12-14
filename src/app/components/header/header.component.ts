import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { JoinModalComponent } from "src/app/modals/join-modal/join-modal.component";
import { DeviceService } from "src/app/services/device.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  isMobile$;
  constructor(
    private deviceService: DeviceService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.isMobile$ = this.deviceService.getIsMobile();
  }

  openJoinDialog() {
    this.dialog.open(JoinModalComponent);
  }
}
