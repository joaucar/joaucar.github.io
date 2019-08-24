import { Component, OnInit, Input } from '@angular/core';
import { Info } from '../info';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.scss']
})

export class ThanksComponent implements OnInit {
  @Input() activeClass: Info;

  constructor() {  }

  ngOnInit() {
  }

}
