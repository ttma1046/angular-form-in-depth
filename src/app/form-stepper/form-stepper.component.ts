import { Component, OnInit, ViewChild, ContentChild, TemplateRef } from '@angular/core';
import { NgForm, ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-form-stepper',
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
  @ViewChild(NgForm) from: NgForm;
  @ContentChild(TemplateRef) template: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

}
