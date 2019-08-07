import { Component, OnInit } from '@angular/core';
import {
  faInstagram,
  faGithub,
  faTwitter,
  faRedditAlien,
  faFacebookF,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import { faGraduationCap, faGlasses, faRocket } from '@fortawesome/free-solid-svg-icons';
import { TimelineService } from './services/timeline.service';
import { Info } from './info';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Website';
  credit = '< by JA />';
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
  info: Info[] = [
    {
      title: 'Education',
      icon: faGraduationCap,
      short:
        'Here you can find my educational credintials as well as my work experience and other knowledge that I have collected in my past.',
      text:
        'In May of 2019 I earned a Bachelors degree in Mechanical Engineering with minors in Mathematics and Philosophy. ' +
        'In September of 2019 I will begin graduate school for Data Science with a Healthcare concentration. My interest with ' +
        'technology began to take off when I studied front-end web development at iXperience in Cape Town. I\'ve continued to ' +
        'practice and learn and now have a certificate in Machine Learning from Stanford.'
    },
    {
      title: 'Hobbies',
      icon: faGlasses,
      short:
        'Here you can find more about what I do in my free time including sports, hobbies, passions and what I am doing right now.',
      text:
        'I first discovered competative ultimate freisbee my freshman year of college and I have been playing ever since. ' +
        'I like to play the guitar, although I\'m not very good.'
    },
    {
      title: 'Future',
      icon: faRocket,
      short:
        'Here you can find where I hope to go with my life and what I hope to accomplish with my time \
         as well as my predictions on the direction the world is heading.',
      text:
        'I am a supporter of space exploration and self-driving cars. I have been listening to the podcast Anatomy of Next and some of ' +
        'the technologies they talk about have me excited for the future. If you get a chance give it a listen.'
    }
  ];
  activeClass: Info;

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

  makeActive(selection) {
    this.activeClass = selection;
  }
}
