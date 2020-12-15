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
      transition(':enter', [style({ opacity: 0 }), animate('2000ms 2000ms')])
    ]),
    trigger('firstViewText', [
      state('in', style({ transform: 'translateY(0)', opacity: 1 })),
      transition(':enter', [style({ transform: 'translateY(100%)', opacity: 0 }), animate(2000)])
    ])
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
        'I am currently studying Data Science with a concentration in Computational Methods at DePaul University in Chicago. My interest with ' +
        'technology began to take off when I studied front-end web development at iXperience in Cape Town. I\'ve continued to ' +
        'practice and learn and now I know several programming languages and have a certificate in Machine Learning from Stanford.',
      images: 'https://websitephotosfornetlify.s3.us-east-2.amazonaws.com/Graduation.jpg'
    },
    {
      title: 'Hobbies',
      icon: faGlasses,
      short:
        'Here you can find more about what I do in my free time including sports, hobbies, passions and what I am doing right now.',
      text:
        'In my free time outside of work I like to maintain a physical and musical pursuit. '+
        'I first discovered competative ultimate freisbee my freshman year of college and I have been playing ever since. ' +
        'I enjoy running because it is peaceful and keeps me in shape. ' +
        'I like to listen to music and play the guitar whenever I have time.',
      images: 'https://websitephotosfornetlify.s3.us-east-2.amazonaws.com/Hobbies.jpg'
    },
    {
      title: 'Future',
      icon: faRocket,
      short:
        'Here you can find where I hope to go with my life and what I hope to accomplish with my time \
         as well as my predictions on the direction the world is heading.',
      text:
        'Through my studies in the technology industry I have become a supporter of space exploration and self-driving cars. '+
        'As a result of the reccent COVID-19 pandemic, there has been an increase in demand for online consumer interaction '+
        'and remote work. I predict that this will accelerate the adoption of Cloud Technologies.'
        ,
      images: 'https://websitephotosfornetlify.s3.us-east-2.amazonaws.com/Future.jpg'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
