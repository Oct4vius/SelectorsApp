import { Injectable } from '@angular/core';
import { Region, SmallCountry } from '../interfaces/countries.interfaces';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private _regions: Region[] = [
    Region.Africa,
    Region.Americas,
    Region.Antarctic,
    Region.Asia,
    Region.Europe,
    Region.Oceania,
  ];

  constructor(

  ) {}

  get regions(): Region[] {
    return [ ...this._regions ];
  }

  getCountriesByRegion( region: Region ): SmallCountry[] {


    return [];
  }

}
