import { Component, OnInit, ViewChild, ElementRef, Self } from '@angular/core';
import { AbstractControl, Validators, NgControl } from '@angular/forms';

@Component({
  selector: 'required-text',
  templateUrl: './required-text.component.html',
  styleUrls: ['./required-text.component.scss']
})
export class RequiredText implements OnInit {
@ViewChild('input', { static: true }) input: ElementRef;
  disabled = false;

  constructor(@Self() public controlDir: NgControl) {
    controlDir.valueAccessor = this;
  }

  onChange: (value: any) => void;
  onTouched: (value: any) => void;

  ngOnInit() {
    const control = this.controlDir.control;

    const validators = control.validator ? [control.validator, Validators.required] : Validators.required;
    control.setValidators(validators);

    control.updateValueAndValidity();
  }

  writeValue(value: any) {
    this.input.nativeElement.value = value;
  }

  registerOnChange(fn: (value: any) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: (value: any) => void) {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

  validate(ctrl: AbstractControl) {
    return Validators.required(ctrl);
  }
}
