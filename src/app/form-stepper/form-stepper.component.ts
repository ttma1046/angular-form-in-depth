import { Component, OnInit, ViewChild, ContentChild, TemplateRef } from '@angular/core';
import { NgForm, ControlContainer } from '@angular/forms';

@Component({
  selector: 'form-stepper',
  templateUrl: './form-stepper.component.html',
  styleUrls: ['./form-stepper.component.scss'],
  providers: [
    {
      provide: ControlContainer,
      useFactory: (comp: any) => comp.form,
      deps: [FormStepperComponent]
    }
  ]
})
export class FormStepperComponent implements OnInit {
  @ViewChild(NgForm, { static: true }) from: NgForm;
  @ContentChild(TemplateRef, { static: true }) template: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

}
