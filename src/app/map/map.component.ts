import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  apiKey = 'AIzaSyBveMA8VF4EDI0FdN3r6k6WyY9pqQZr9dY';
  markers = '';
  pins = [
    'Tyler,TX',
    'Lubbock,TX',
    'Chicago,IL',
    'Cape+Town,ZA',
    'Seville,ES',
    'Paris,FR',
    'Omaha+Beach,FR',
    'Santiago+de+Compostela,ES'
    // { address: 'Tyler,TX', lat: 33.577863, lng: -101.855166 },
    // { address: 'Lubbock,TX', lat: 33.577863, lng: -101.855166 }
  ];
  baseUrl =
    'https://maps.googleapis.com/maps/api/staticmap?center=0,0&zoom=1&' +
    'size=500x350&scale=2&markers=color:blue%7Csize:tiny%7C' +
    this.pins.join('%7C') +
    '&key=' +
    this.apiKey;

  constructor() {}

  ngOnInit() {}
}
