import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TableComponent } from './table/table.component';
import { MatIconModule } from '@angular/material/icon';
import { FormComponent } from './form/form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MessageComponent } from './modal/message/message.component';

@NgModule({
  declarations: [AppComponent, TableComponent, FormComponent, MessageComponent],
  entryComponents: [MessageComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
