import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  onSelectionChange($event: MatSelectChange, element: PeriodicElement) {
    console.log('MatSelectChange', $event);
    console.log('MatSelectChange - element', element);
  }
  @ViewChildren('selectComponentView') selectComponents =
    new QueryList<ElementRef>();

  title = 'material-demo-angular';
  displayedColumns: string[] = ['position', 'name', 'weight', 'interval'];
  intervals: Array<string> = ['2pm', '4pm'];
  dataSource = ELEMENT_DATA;

  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
    console.log('components', this.selectComponents);
  }
}

// Table data

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  interval: Array<string>;
}

const ELEMENT_DATA: Array<PeriodicElement> = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, interval: ['4pm'] },
  { position: 2, name: 'Helium', weight: 4.0026, interval: ['2pm'] },
  { position: 3, name: 'Lithium', weight: 6.941, interval: ['2pm', '4pm'] },
  { position: 4, name: 'Beryllium', weight: 9.0122, interval: ['4pm'] },
  { position: 5, name: 'Boron', weight: 10.811, interval: ['4pm'] },
  { position: 6, name: 'Carbon', weight: 12.0107, interval: ['4pm'] },
  { position: 7, name: 'Nitrogen', weight: 14.0067, interval: ['4pm'] },
  { position: 8, name: 'Oxygen', weight: 15.9994, interval: ['4pm'] },
  { position: 9, name: 'Fluorine', weight: 18.9984, interval: ['4pm'] },
  { position: 10, name: 'Neon', weight: 20.1797, interval: ['4pm'] },
];
