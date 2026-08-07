import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css'
})
export class Gallery {
  categories=[
    'All',
    'Consultoria',
    'Inspecciones de Buques',
    'Puertos y Terminales',
    'Inspecciones de Carga',
    'Operaciones de Campo'
  ];
  selectedCategory='All'

  images = [
  {
    id: 1,
    title: 'Cargo Hold Structural Evaluation',
    location: 'Bulk Carrier, Panama',
    category: 'Ship Inspection',
    featured: true,
    description: 'Detailed inspection of cargo hold.',
    src: 'images/comprehensive/s1.jpg'
  },
  {
    id: 2,
    title: 'Engine Room',
    location: 'Panama',
    category: 'Consulting',
    featured: false,
    description: 'Engine room inspection.',
    src: 'images/comprehensive/s2.jpg'
  },

  {
    id: 3,
    title: 'Engine Room',
    location: 'Panama',
    category: 'Consulting',
    featured: false,
    description: 'Engine room inspection.',
    src: 'images/comprehensive/s3.jpg'
  },

  {
    id: 4,
    title: 'Engine Room',
    location: 'Panama',
    category: 'Consulting',
    featured: false,
    description: 'Engine room inspection.',
    src: 'images/comprehensive/s4.avif'
  },

  {
    id: 5,
    title: 'Engine Room',
    location: 'Panama',
    category: 'Consulting',
    featured: false,
    description: 'Engine room inspection.',
    src: 'images/comprehensive/s5.jpg'
  }
];
// categories = [
//   'All',
//   'Consulting',
//   'Ship Inspection',
//   'Ports',
//   'Cargo Inspection',
//   'Field Operations'
// ];
selectedImage:any=null;


get filteredImages() {
  if (this.selectedCategory === 'All') {
    return this.images;
  }

  return this.images.filter(
    image => image.category === this.selectedCategory
  );
}
openImage(img:any){
  this.selectedImage=img;
}
closeModel(){
  this.selectedImage=null;
}
next(){
  let list=this.filteredImages;
  let index=list.indexOf(this.selectedImage);
  if(index<list.length-1){
    this.selectedImage=list[index+1];
  }
}

  previous(){
    let list=this.filteredImages;
  let index=list.indexOf(this.selectedImage);
  if(index>0){
    this.selectedImage=list[index-1];
  }

  }
}
