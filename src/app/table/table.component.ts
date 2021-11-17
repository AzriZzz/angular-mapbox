import { MapBoxComponent } from './../map-box/map-box.component';
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
  Pipe,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { IRestaurant } from '../models/models';
import { TABLE_COLUMN } from '../app.constant';
import { MatDialog } from '@angular/material/dialog';
import { MapService } from '../services/map.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Input() data: Observable<any>;

  displayedColumns: string[] = TABLE_COLUMN;
  dataSource = new MatTableDataSource([]);
  resData: any;

  _data: any;

  message: any;
  coordinates: number[] = [];

  constructor(
    private cd: ChangeDetectorRef,
    private dialog: MatDialog,
    private restaurantService: RestaurantService,
    private mapService: MapService,
    private _snackBar: MatSnackBar
  ) {
    this.mapService.currentCoordinate.subscribe(
      (coordinates) => (this.coordinates = coordinates)
    );
  }

  ngOnInit() {
    this.mapService.currentCoordinate.subscribe(
      (coordinates) => (this.coordinates = coordinates)
    );

    this.data.subscribe((value) => {
      this._data = value;
      this.cd.markForCheck();
      this.resData = this._data;
      this.tableUpdate(this._data);
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  tableUpdate(data): void {
    this.dataSource = new MatTableDataSource<IRestaurant>(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  focusLocation(element) {
    const coordinates = [element.longitude, element.latitude];
    this.mapService.changeCoordinate(coordinates);
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
        this._snackBar.open('Restaurant Deleted!', 'Close');
      } else {
        return;
      }
    });
  }
}
