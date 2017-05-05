import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormArray} from "@angular/forms";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ["./reactive-form.component.css"]
})
export class ReactiveFormComponent implements OnInit {

  formModul:FormGroup = new FormGroup({
    dateRange:new FormGroup({
      from:new FormControl("dang"),
      to:new FormControl("ding")
    }),
    emails:new FormArray([
        new FormControl("a@a.com"),
        new FormControl("b@b.com")
    ])
  });


  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.formModul.value);
  }

  addEmail() {
    let emails = this.formModul.get("emails") as FormArray;
    emails.push(new FormControl());
  }


}