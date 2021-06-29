import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  markers: Marker[] = [
    { address: 'Tyler,TX', lat: 32.3491, lng: -95.306141, description: 'Home Town' },
    {
      address: 'Lubbock, TX',
      lat: 33.57883,
      lng: -101.88802,
      description: 'Texas Tech University, 2015-2019'
    },
    {
      address: 'Chicago, IL',
      lat: 41.903801,
      lng: -87.629051,
      description: 'De Paul University, 2019-2021'
    },
    {
      address: 'Cape Town, ZA',
      lat: -33.92711,
      lng: 18.42006,
      description: 'Where I learned to code'
    },
    { address: 'Seville, ES', lat: 37.389091, lng: -5.984459, description: 'Study Abroad' },
    { address: 'Paris, FR', lat: 48.856613, lng: 2.352222, description: 'Family Vacation' },
    {
      address: 'Omaha Beach, FR',
      lat: 49.35042,
      lng: -0.82668,
      description: 'Visited the D-day memorial'
    },
    {
      address: 'Santiago de Compostela, ES',
      lat: 42.88062,
      lng: -8.54661,
      description: 'Walked the Camino'
    },
    {
      address: 'Tokyo, JP',
      lat: 35.689487,
      lng: 139.691711,
      description: 'Family Vacation'
    },
    {
      address: 'Kansas City, MO',
      lat: 39.0997,
      lng: -94.5786,
      description: 'Where I live'
    }
  ];
  centerLat = 0;
  centerLng = 0;
  zoom = 2;

  constructor() {}

  ngOnInit() {}
}

interface Marker {
  address: string;
  lat: number;
  lng: number;
  description?: string;
}
