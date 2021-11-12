import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { defaultForm } from './app.constant';
import { RestaurantService } from './services/restaurant.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Restaurant Database';

  items: [] = [];

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
  }
}
