import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  templateUrl: './services.html',
  styleUrl: './services.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class Services implements AfterViewInit {

  @ViewChild('swiperTop')
  swiperTop!: ElementRef;

  @ViewChild('swiperBottom')
  swiperBottom!:ElementRef;

constructor(private router: Router) {}

goToAbout(): void {
  this.router.navigate(['/about']);
}

  services = [
    { image: 'images/comprehensive/s1.jpg', title: 'Regulatory Compliance' },
    { image: 'images/comprehensive/s2.jpg', title: 'Vessel Inspection' },
    { image: 'images/comprehensive/s3.jpg', title: 'Draft Survey' },
    { image: 'images/comprehensive/s4.avif', title: 'Marine Survey' },
    { image: 'images/comprehensive/s5.jpg', title: 'Cargo Inspection' }
  ];

  ngAfterViewInit() {

  const top: any = this.swiperTop.nativeElement;
  const bottom = this.swiperBottom.nativeElement;
  Object.assign(top, {
    loop: true,
    speed: 3500,
    spaceBetween: 20,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
    },
    freeMode: {
      enabled: true,
      momentum: false,
    },
    breakpoints: {
      320: { slidesPerView: 2 },
      640: { slidesPerView: 3 },
      1024: { slidesPerView: 5 }
    }
  });

  top.initialize();

  Object.assign(bottom, {
    loop: true,
    speed: 3500,
    spaceBetween: 20,
    autoplay: {
      delay: 0,
      reverseDirection: true,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
    },
    freeMode: {
      enabled: true,
      momentum: false,
    },
    breakpoints: {
      320: { slidesPerView: 2 },
      640: { slidesPerView: 3 },
      1024: { slidesPerView: 5 }
    }
  });

  bottom.initialize();
}


}