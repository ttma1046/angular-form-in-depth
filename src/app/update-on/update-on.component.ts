import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup, ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'update-on',
  templateUrl: './update-on.component.html'
})
export class UpdateOnComponent {
  form = new FormGroup(
    {
      first: new FormControl('', { validators: Validators.required }),
      last: new FormControl('', { validators: Validators.required }),
      required: new FormControl('', { validators: Validators.email }),
      address: new FormControl('')
    }
  , { updateOn: 'change' });
}
