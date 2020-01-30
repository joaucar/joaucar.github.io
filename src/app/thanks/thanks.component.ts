import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Info } from '../info';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.scss']
})
export class ThanksComponent implements OnChanges {
  @Input() activeClass: Info;

  constructor() {}
  ngOnChanges() {
    const parentDiv = document.getElementById('picture');
    parentDiv.innerHTML = '';
    console.log(this.activeClass.images);
    let i = 0;
    this.activeClass.images.forEach(image => {
      console.log(image);
      const img = new Image();
      img.src = '../' + image;
      img.classList.add('pictures', this.activeClass.title);
      parentDiv.appendChild(img);
      i++;
    });
  }
}
