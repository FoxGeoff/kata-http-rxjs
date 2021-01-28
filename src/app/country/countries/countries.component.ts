import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Country } from '../country';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  countries: Country[];
  name:string;

  constructor(public http: HttpClient, private apiService: CountryService){}

  ngOnInit(): void {
  }

  searchCapital() {
    this.apiService
    .searchCountryByName(this.name)
    .subscribe((data:Country[]) => {
      console.log(data);
      this.countries = data;
    });
  }

}
