import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-header-wide",
  templateUrl: "./header-wide.component.html",
  styleUrls: ["./header-wide.component.scss"],
})
export class HeaderWideComponent implements OnInit {
  @Output() openJoinDialogEvent = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  openJoinDialog() {
    this.openJoinDialogEvent.emit(true);
  }
}
