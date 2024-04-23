import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';
import { Region, SmallCountry } from '../../interfaces/countries.interfaces';
import { switchMap } from 'rxjs';

@Component({
  selector: 'countries-selector-page',
  templateUrl: './selector-page.component.html',
})
export class SelectorPageComponent implements OnInit {

  public countriesByRegion: SmallCountry[] = [];

  public myForm: FormGroup = this.fb.group({
    region: ['', Validators.required],
    country: ['', Validators.required],
    borders: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private countriesService: CountriesService
  ) {}


  get regions(): Region[] {
    return this.countriesService.regions;
  }

  ngOnInit(): void {
    this.onRegionChanged()
  }

  private onRegionChanged(): void {

    this.myForm.get('region')?.valueChanges
      .pipe(
        switchMap(region => this.countriesService.getCountriesByRegion(region))
      )
      .subscribe(countries => {
        this.countriesByRegion = countries
      })
  }

}
