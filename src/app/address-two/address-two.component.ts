import { Component, OnInit } from '@angular/core';
import { FormGroupDirective, FormGroup, ControlContainer, FormControl } from '@angular/forms';

@Component({
  selector: 'address-two',
  templateUrl: './address-two.component.html',
  styleUrls: ['./address-two.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})
export class AddressTwoComponent implements OnInit {


  constructor(private parent: FormGroupDirective) {
  }

  ngOnInit() {
    this.parent.form.addControl('addresstwo', new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
    }));
  }

}
