import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Service {
  image: string;
  title: string;
  description: string;
  active?: boolean;
}

@Component({
  selector: 'app-comprehensive',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './comprehensive.html',
  styleUrl: './comprehensive.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Comprehensive {

  services: Service[] = [
    {
      image: 'images/comprehensive/s1.jpg',
      title: 'Regulatory Compliance',
      description: 'Ensure compliance with international maritime regulations.'
    },
    {
      image: 'images/comprehensive/s2.jpg',
      title: 'Vessel Inspections',
      description: 'Pre-purchase, condition, on/off hire, damage & casualty, P&I',
      active: true
    },
    {
      image: 'images/comprehensive/s3.jpg',
      title: 'Vessel Inspections',
      description: 'Pre-purchase, condition, on/off hire, damage & casualty, P&I',
      active: true
    },
    {
      image: 'images/comprehensive/s4.avif',
      title: 'Vessel Inspections',
      description: 'Pre-purchase, condition, on/off hire, damage & casualty, P&I',
      active: true
    },
    {
      image: 'images/comprehensive/s5.jpg',
      title: 'Vessel Inspections',
      description: 'Pre-purchase, condition, on/off hire, damage & casualty, P&I',
      active: true
    }

  ];

  

}