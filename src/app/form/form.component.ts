import { RESTAURANT_DATA } from './../app.constant';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
  
  restaurantForm = this.formBuilder.group({
    restaurantName: [''],
    latitude: [''],
    longitude: [''],
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
    } else {
      this._snackBar.open(message, button);
    }

    this.data$.next(RESTAURANT_DATA);
  }


}
