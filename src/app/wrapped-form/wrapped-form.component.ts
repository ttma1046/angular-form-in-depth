import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'wrapped-form',
  templateUrl: './wrapped-form.component.html',
  styleUrls: ['./wrapped-form.component.scss']
})
export class WrappedFormComponent implements OnInit {
  form: FormGroup;
  errors: string[];

  constructor() { }

  ngOnInit() {
    /*
    this.form.statusChanges.subscribe(val => {
      // this.errors = this.reduceErrors(val);
    });
    */
  }


}
