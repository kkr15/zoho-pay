import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog'

export interface modalData {
  icon: string,
  label: string,
  primaryButtonValue: string,
  secondaryButtonValue: string
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: modalData) { }

  ngOnInit(): void {
  }

}
