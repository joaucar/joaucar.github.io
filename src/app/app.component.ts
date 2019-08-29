import { Component, OnInit } from '@angular/core';
import { faGraduationCap, faGlasses, faRocket } from '@fortawesome/free-solid-svg-icons';
import { Info } from './info';
import { trigger, style, transition, state, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('firstView', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [style({ opacity: 0 }), animate(3000)])
    ]),
    trigger('firstViewText', [
      state('in', style({ transform: 'translateY(0)', opacity: 1 })),
      transition(':enter', [style({ transform: 'translateY(100%)', opacity: 0 }), animate(1000)])
    ])
    // trigger('headerInLeft', [
    //   state('in', style({ transform: 'translateX(0)', opacity: 1 })),
    //   transition(':enter', [style({ transform: 'translateX(-100%)', opacity: 0 }), animate(2000)]),
    //   transition(':leave', [animate(2000, style({ transform: 'translateX(100%)', opacity: 0 }))])
    // ])
  ]
})
export class AppComponent implements OnInit {
  title = 'Website';
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

  constructor() {}

  ngOnInit() {}

  makeActive(selection) {
    this.activeClass = selection;
  }
}
