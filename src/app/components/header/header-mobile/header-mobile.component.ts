import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-header-mobile",
  templateUrl: "./header-mobile.component.html",
  styleUrls: ["./header-mobile.component.scss"],
})
export class HeaderMobileComponent implements OnInit {
  @Output() openJoinDialogEvent = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}
  openJoinDialog() {
    this.openJoinDialogEvent.emit(true);
  }
}
