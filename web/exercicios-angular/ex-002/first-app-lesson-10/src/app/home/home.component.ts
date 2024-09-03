import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent
  ],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #city>
        <button class="primary" type="button" (click)="filterLocation(city.value)">Search</button>
      </form>
    </section>
    <section class="results">

      @if (filteredLocationList) {
        <app-housing-location
        *ngFor="let housingLocation of filteredLocationList"
        [housingLocation]="housingLocation">
      </app-housing-location>
      }
      @else {
        <p>loading...</p>
      }
    </section>
  `,
  styleUrls: ['./home.component.css'],
})

export class HomeComponent {
  housingLocationList$!: Observable<HousingLocation[]>;
  filteredLocationList!: HousingLocation[];
  housingService: HousingService = inject(HousingService);

  ngOnInit() {
    this.housingLocationList$ = this.housingService.getAllHousingLocations();
    this.housingLocationList$.subscribe(housingLocationList => this.filteredLocationList = housingLocationList)
  }

  filterLocation(city: string) {
    this.housingLocationList$.subscribe( housingLocationList => this.filteredLocationList = housingLocationList
      .filter(housingLocation => housingLocation.city.toLowerCase()
      .includes(city.toLowerCase())))
  }

}
