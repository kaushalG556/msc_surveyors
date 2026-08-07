import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.html'
})
export class Services {

  constructor(private router: Router) {}

  selectedCategory = 'All';

  categories = [
    'All',
    'Vessels',
    'Cargo',
    'Consultancy',
    'Ports'
  ];

  services = [
    {
      title: 'Vessel Surveys',
      category: 'Vessels',
      image: 'images/comprehensive/s1.jpg',
      description: 'Comprehensive vessel inspections.',
      expanded: false,
      points: [
        'Pre-purchase Surveys',
        'Condition and Class Surveys',
        'On-hire / Off-hire Surveys',
        'Damage and Casualty Surveys',
        'P&I Surveys'
      ]
    },

    {
      title: 'Cargo Surveys',
      category: 'Cargo',
      image: 'images/comprehensive/s2.jpg',
      description: 'Cargo inspection services.',
      expanded: false,
      points: [
        'Pre-loading Surveys',
        'Cargo Damage Assessment',
        'Loading Supervision',
        'Discharging Supervision',
        'Cargo Quantity Survey'
      ]
    },

    {
      title: 'Marine Consultancy',
      category: 'Consultancy',
      image: 'images/comprehensive/s3.jpg',
      description: 'Marine consulting.',
      expanded: false,
      points: [
        'ISM Audit',
        'Technical Advisory',
        'Incident Investigation',
        'Safety Management',
        'Risk Assessment'
      ]
    },

    {
      title: 'Port Services',
      category: 'Ports',
      image: 'images/comprehensive/s4.avif',
      description: 'Port inspection.',
      expanded: false,
      points: [
        'Port Inspection',
        'Berthing Survey',
        'Loading Check',
        'Discharge Survey',
        'Harbour Inspection'
      ]
    },

    {
      title: 'Port Services',
      category: 'Ports',
      image: 'images/comprehensive/s5.jpg',
      description: 'Port inspection.',
      expanded: false,
      points: [
        'Safety Inspection',
        'Equipment Survey',
        'Draft Survey',
        'Cargo Inspection',
        'Final Report'
      ]
    }
  ];

  get filteredServices() {
    if (this.selectedCategory === 'All') {
      return this.services;
    }

    return this.services.filter(
      x => x.category === this.selectedCategory
    );
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  toggle(service: any) {
    service.expanded = !service.expanded;
  }

  openContact() {
    this.router.navigate(['/contact']);
  }
}