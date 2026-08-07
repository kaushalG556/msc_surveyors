import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css'
})
export class Gallery implements OnInit, OnDestroy {

  images = [

    {
      image:'images/gallery/g1.jpg',
      title:'Vessel Hull Survey',
      category:'BUQUES'
    },

    {
      image:'images/gallery/g2.jpg',
      title:'Cargo Inspection',
      category:'MARINE'
    },

    {
      image:'images/gallery/g3.avif',
      title:'Draft Survey',
      category:'PORT'
    },

    {
      image:'images/gallery/g4.jpg',
      title:'Loading Survey',
      category:'SHIP'
    }

  ];

  currentIndex=0;

  interval:any;

  ngOnInit(){

    this.interval=setInterval(()=>{

      this.nextSlide();

    },3000);

  }

  ngOnDestroy(){

    clearInterval(this.interval);

  }

  nextSlide(){

    this.currentIndex=(this.currentIndex+1)%this.images.length;

  }

  prevSlide(){

    this.currentIndex=(this.currentIndex-1+this.images.length)%this.images.length;

  }

  goToSlide(index:number){

    this.currentIndex=index;

  }

}

