import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-join-modal",
  templateUrl: "./join-modal.component.html",
  styleUrls: ["./join-modal.component.scss"],
})
export class JoinModalComponent implements OnInit {
  form: FormGroup;
  description: string;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<JoinModalComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
    });
  }

  close() {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close(this.form.value);
  }
}
