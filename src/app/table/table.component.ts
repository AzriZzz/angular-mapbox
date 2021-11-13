import { MessageComponent } from './../modal/message/message.component';
import { Observable } from 'rxjs';
import { RestaurantService } from './../services/restaurant.service';
import {
  AfterViewInit,
  Component,
  ViewChild,
  OnInit,
  OnChanges,
  ChangeDetectionStrategy,
  Input,
  ChangeDetectorRef,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { IRestaurant } from '../models/models';
import { RESTAURANT_DATA, TABLE_COLUMN } from '../app.constant';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = TABLE_COLUMN;
  dataSource = new MatTableDataSource([]);
  resData: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Input() data: Observable<any>;
  _data;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor(
    private cd: ChangeDetectorRef,
    private dialog: MatDialog,
    private restaurantService: RestaurantService
  ) {}

  ngOnInit() {
    this.data.subscribe((value) => {
      this._data = value;
      this.cd.markForCheck();
      this.resData = this._data;
      this.tableUpdate(this._data);
    });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  tableUpdate(data): void {
    this.dataSource = new MatTableDataSource<IRestaurant>(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  focusLocation() {
    console.log('focusLocation');
  }

  onDelete(element) {
    const dialogData = {
      data: {
        name: element.name,
      },
    };
    let dialogRef = this.dialog.open(MessageComponent, dialogData);

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'true') {
        this.resData = this.resData.filter((el) => el.index !== element.index);
        const result = this.restaurantService.updateList(this.resData);
        this.tableUpdate(result);
      } else {
        return;
      }
    });
  }
}
