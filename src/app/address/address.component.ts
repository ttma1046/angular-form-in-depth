import { Component, OnInit } from '@angular/core';
import { FormGroup, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';

@Component({
  selector: 'address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: AddressComponent
    }
  ]
})
export class AddressComponent implements OnInit {
  addressForm: FormGroup = new FormGroup({
    street: new FormControl(''),
    city: new FormControl(''),
  });

  onTouched: () => void;

  constructor() { }

  ngOnInit() {
  }

  writeValue(val: any) {
    val && this.addressForm.setValue(val, { emitEvent: false });
  }

  registerOnChange(fn: (val: any) => void) {
    this.addressForm.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean) {
    disabled ? this.addressForm.disable() : this.addressForm.enable();
  }
}
