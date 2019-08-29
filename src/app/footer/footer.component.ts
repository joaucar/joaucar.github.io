import { Component, OnInit } from '@angular/core';
import {
  faInstagram,
  faGithub,
  faTwitter,
  faRedditAlien,
  faFacebookF,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import { TimelineService } from '../services/timeline.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faGithub = faGithub;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faRedditAlien = faRedditAlien;
  faFacebookF = faFacebookF;
  faLinkedin = faLinkedin;
  timeStamp = '0';
  month = '0';
  year = '0';
  day = '0';
  response: any;

  constructor(public TLService: TimelineService) {}

  ngOnInit() {
    this.TLService.getInfo()
      .toPromise()
      .then(res => {
        console.log(res);
        this.response = res;
        this.timeStamp = this.response[0].commit.author.date;
      });
    console.log(this.response);
  }

  formatDate() {
    if (this.timeStamp.length > 1) {
      this.month = this.timeStamp.slice(5, 7);
      this.year = this.timeStamp.slice(0, 4);
      this.day = this.timeStamp.slice(8, 10);
    }
    switch (this.month) {
      case '01':
        this.month = 'Jan';
        break;
      case '02':
        this.month = 'Feb';
        break;
      case '03':
        this.month = 'Mar';
        break;
      case '04':
        this.month = 'Apr';
        break;
      case '05':
        this.month = 'May';
        break;
      case '06':
        this.month = 'Jun';
        break;
      case '07':
        this.month = 'Jul';
        break;
      case '08':
        this.month = 'Aug';
        break;
      case '09':
        this.month = 'Sep';
        break;
      case '10':
        this.month = 'Oct';
        break;
      case '11':
        this.month = 'Nov';
        break;
      case '12':
        this.month = 'Dec';
        break;
      default:
        break;
    }
    const date = this.month + ' ' + this.day + ', ' + this.year;
    return date;
  }
}
