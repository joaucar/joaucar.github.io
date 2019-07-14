import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  markers: Marker[] = [
    { address: 'Tyler,TX', lat: 32.3491, lng: -95.306141 },
    { address: 'Texas Tech University', lat: 33.57883, lng: -101.88802 },
    { address: 'Cape Town, ZA', lat: -33.92711, lng: 18.42006 },
    { address: 'Seville, ES', lat: 37.389091, lng: -5.984459 },
    { address: 'Paris, FR', lat: 48.856613, lng: 2.352222 },
    { address: 'Omaha Beach, FR', lat: 49.35042, lng: -0.82668 },
    { address: 'Santiago de Compostela, ES', lat: 42.88062, lng: -8.54661 }
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
