import { RESTAURANT_DATA } from './../app.constant';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroupDirective, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { defaultForm } from '../app.constant';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  data$ = new BehaviorSubject(RESTAURANT_DATA);
  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

  restaurantForm = this.formBuilder.group({
    restaurantName: ['', [Validators.required]],
    latitude: ['', [Validators.required, Validators.pattern("^[0-9]+(\.[0-9]{1,6})?$")]],
    longitude: ['', [Validators.required, Validators.pattern("^[0-9]+(\.[0-9]{1,6})?$")]],
    type: [''],
  });

  constructor(
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private restaurantService: RestaurantService
  ) {}
  
  async onSubmit(): Promise<void> {
    this.restaurantService.getList();
    const snackbar = await this.restaurantService.validateForm(
      this.restaurantForm.value
    );
    const { isSuccess, message, button } = snackbar;
    if (isSuccess) {
      this._snackBar.open(message, button);
      this.restaurantForm.reset(defaultForm);
      this.formGroupDirective.resetForm();
    } else {
      this._snackBar.open(message, button);
    }
    const result = this.restaurantService.getList();
    this.data$.next(result);
  }


}
