import {
  Component,
  ViewChildren
} from '@angular/core';
import {
  CarouselComponent
} from './carousel/carousel.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  myCarousel;
  carouselWidth = 640;
  carouselHeight = 220;

  images2 = [{
      path: '/assets/images/IMG-20210225-WA0001.jpg',
    },
    {
      path: '/assets/images/IMG-20210225-WA0002.jpg',
    },
    {
      path: '/assets/images/IMG-20210225-WA0003.jpg',
    },
    {
      path: '/assets/images/IMG-20210225-WA0006.jpg',
    },
    {
      path: '/assets/images/IMG-20210225-WA0007.jpg',
    },
    {
      path: '/assets/images/IMG-20210225-WA0008.jpg',
    },
    {
      path: '/assets/images/IMG-20210225-WA0009.jpg',
    },
    {
      path: '/assets/images/IMG-20210225-WA0010.jpg',
    },
    {
      path: '/assets/images/IMG-20210225-WA0012.jpg',
    },
    {
      path: '/assets/images/IMG-20210225-WA0013.jpg',
    },
    {
      path: '/assets/images/IMG-20210225-WA0014.jpg',
    },
    {
      path: '/assets/images/IMG-20210225-WA0015.jpg',
    },
    {
      path: '/assets/images/IMG-20210225-WA0016.jpg',
    },
    {
      path: '/assets/images/IMG-20210225-WA0017.jpg',
    },
    {
      path: '/assets/images/IMG-20210225-WA0019.jpg',
    },
    {
      path: '/assets/images/IMG-20210225-WA0020.jpg',
    },
    {
      path: '/assets/images/IMG-20210225-WA0022.jpg',
    },
    {
      path: '/assets/images/IMG-20210225-WA0023.jpg',
    },
    {
      path: '/assets/images/IMG-20210225-WA0024.jpg',
    },
    {
      path: '/assets/images/IMG-20210225-WA0025.jpg',
    },
    {
      path: '/assets/images/IMG-20210225-WA0026.jpg',
    },
    {
      path: '/assets/images/IMG-20210225-WA0027.jpg',
    },
    {
      path: '/assets/images/IMG-20210225-WA0028.jpg',
    },
    {
      path: '/assets/images/IMG-20210225-WA0031.jpg',
    },
    {
      path: '/assets/images/IMG-20210225-WA0032.jpg',
    },
    {
      path: '/assets/images/IMG-20210225-WA0033.jpg',
    },
    {
      path: '/assets/images/IMG-20210225-WA0034.jpg',
    },
    {
      path: '/assets/images/IMG-20210225-WA0036.jpg',
    },
    {
      path: '/assets/images/IMG-20210225-WA0038.jpg',
    },
    {
      path: '/assets/images/IMG-20210225-WA0039.jpg',
    },
    {
      path: '/assets/images/IMG-20210225-WA0040.jpg',
    },
    {
      path: '/assets/images/IMG-20210225-WA0041.jpg',
    },
    {
      path: '/assets/images/IMG-20210225-WA0042.jpg',
    },
    {
      path: '/assets/images/IMG-20210225-WA0043.jpg',
    },
    {
      path: '/assets/images/IMG-20210225-WA0044.jpg',
    },
    {
      path: '/assets/images/IMG-20210225-WA0045.jpg',
    },
    {
      path: '/assets/images/IMG-20210225-WA0046.jpg',
    },
    {
      path: '/assets/images/IMG-20210225-WA0047.jpg',
    },
    {
      path: '/assets/images/IMG-20210225-WA0048.jpg',
    },
    {
      path: '/assets/images/IMG-20210225-WA0049.jpg',
    },
    {
      path: '/assets/images/IMG-20210225-WA0050.jpg',
    },
    {
      path: '/assets/images/IMG-20210225-WA0051.jpg',
    },
    {
      path: '/assets/images/IMG-20210225-WA0052.jpg',
    },
    {
      path: '/assets/images/IMG-20210225-WA0053.jpg',
    },
    {
      path: '/assets/images/IMG-20210225-WA0054.jpg',
    },
    {
      path: '/assets/images/IMG-20210225-WA0055.jpg',
    },
    {
      path: '/assets/images/IMG-20210225-WA0056.jpg',
    },
    {
      path: '/assets/images/IMG-20210225-WA0057.jpg',
    },
    {
      path: '/assets/images/IMG-20210225-WA0058.jpg',
    },
    {
      path: '/assets/images/IMG-20210225-WA0059.jpg',
    },
    {
      path: '/assets/images/IMG-20210225-WA0060.jpg',
    },
    {
      path: '/assets/images/IMG-20210225-WA0061.jpg',
    },
    {
      path: '/assets/images/IMG-20210225-WA0062.jpg',
    },
    {
      path: '/assets/images/IMG-20210225-WA0063.jpg',
    },
    {
      path: '/assets/images/IMG-20210225-WA0064.jpg',
    }
  ];

  @ViewChildren(CarouselComponent) carouselComponent;

  ngOnInit() {}

  ngAfterViewInit() {
    this.myCarousel = this.carouselComponent.find(elem => elem.id === "my-carousel");
  }

  requestFullscreen() {
    document.documentElement.requestFullscreen();
  }

  handleCarouselEvents(event) {
    if (event.type === "click") {
      console.log(event);
    }
  }

  next() {
    this.myCarousel.next();
  }

  prev() {
    this.myCarousel.prev();
  }

  resize() {
    if (this.carouselWidth === 320) {
      this.carouselWidth = 480;
      this.carouselHeight = 320;
    } else {
      this.carouselWidth = 320;
      this.carouselHeight = 220;
    }
  }

  select(index) {
    this.myCarousel.select(index);
  }

}
