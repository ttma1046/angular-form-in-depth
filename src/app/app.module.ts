import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpdateOnComponent } from './update-on/update-on.component';
import { RequiredText } from './required-text/required-text.component';
import { AddressComponent } from './address/address.component';
import { WrappedFormComponent } from './wrapped-form/wrapped-form.component';
import { AddressTwoComponent } from './address-two/address-two.component';
import { FormStepperComponent } from './form-stepper/form-stepper.component';

@NgModule({
  declarations: [
    AppComponent,
    UpdateOnComponent,
    RequiredText,
    AddressComponent,
    WrappedFormComponent,
    AddressTwoComponent,
    FormStepperComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
