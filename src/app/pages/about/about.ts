import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
interface AboutItem {
  year: string;
  title: string;
  description: string;
  points: string[];
  note: string;
  image: string;
}
interface Value{
  id: number;
  title:string;
  icon:string;
  description:string
}

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})

export class About {
  aboutItems: AboutItem[] = [
    {
      year: '2019-2020',
      title: 'Foundation',
      description:
        'The company began operations focusing on cargo inspections, condition surveys and supervision of port operations.',
      points: ['Cargo inspections', 'Condition surveys', 'Supervision of port operations'],
      note: 'MSC built its reputation on technical accuracy, clear reporting and prompt response.',
      image: 'images/gallery/g1.jpg',
    },
    {
      year: '2021-2022',
      title: 'Expansion',
      description: 'Expanded services throughout Panama and neighboring ports.',
      points: ['Marine inspections', 'Hull surveys', 'Flag inspections'],
      note: 'The company expanded its client base across Central America.',
      image: 'images/gallery/g2.jpg',
    },
    {
      year: '2023-2025',
      title: 'International Growth',
      description: 'Providing services across America and the Caribbean.',
      points: ['P&I inspections', 'Cargo damage surveys', 'Technical consultancy'],
      note: 'Trusted by international shipowners and insurance companies.',
      image: 'images/gallery/g3.avif',
    },
  ];

  currentIndex = 0;

  stories = [
    {
      image: 'images/about-banner.avif',
      thumb: 'images/about-banner.avif',
      category: 'Cargo Inspections',
      title: 'Bulk Cargo Inspection',
      sub: 'International logistics operator',
      challenge: 'Recurring discrepancies in cargo weight and condition.',
      solution: 'Full draft survey, loading and discharge supervision, photographic records.',
      result: 'Elimination of contractual claims and significant financial savings.',
    },

    {
      image: 'images/about-small.avif',
      thumb: 'images/about-small.avif',
      category: 'Vessel Inspections',
      title: 'Vessel Condition Survey',
      sub: 'Marine safety inspection',
      challenge: 'Unknown vessel condition before operation.',
      solution: 'Complete vessel inspection and technical reporting.',
      result: 'Reduced operational risks and better decisions.',
    },

    {
      image: 'images/comprehensive/s1.jpg',
      thumb: 'images/comprehensive/s1.jpg',
      category: 'Maritime Consultancy',
      title: 'Port Consultancy Service',
      sub: 'Professional maritime advice',
      challenge: 'Improving port efficiency.',
      solution: 'Detailed analysis and operational recommendations.',
      result: 'Higher productivity and reduced costs.',
    },
  ];

  progress = 33;

  next() {
    this.currentIndex++;

    if (this.currentIndex >= this.stories.length) {
      this.currentIndex = 0;
    }

    this.progress = (this.currentIndex + 1) * 33;
  }

  previous() {
    this.currentIndex--;

    if (this.currentIndex < 0) {
      this.currentIndex = this.stories.length - 1;
    }

    this.progress = (this.currentIndex + 1) * 33;
  }

  changeSlide(index: number) {
    this.currentIndex = index;

    this.progress = (index + 1) * 33;
  }






  activeIndex = 0;

  items = [
    {
      number: '01/05',
      icon: '✓',
      title: 'Independent Third-Party Verification',
      description:
        'Independent organization specializing in comprehensive vessel, cargo, and maritime infrastructure inspections. We provide objective, accurate assessments compliant with international standards.'
    },
    {
      number: '02/05',
      icon: '⏰',
      title: 'Rapid Response and 24/7 Availability',
      description:
        'Our surveyors are available around the clock to provide immediate support whenever and wherever you need assistance.'
    },
    {
      number: '03/05',
      icon: '📄',
      title: 'Impartial Reports Accepted by Stakeholders',
      description:
        'Every report is unbiased, professional, and accepted by ship owners, insurers, banks, and charterers.'
    },
    {
      number: '04/05',
      icon: '🛠',
      title: 'Modern Tools',
      description:
        'We use advanced inspection equipment and modern reporting systems for maximum accuracy.'
    },
    {
      number: '05/05',
      icon: '🌍',
      title: 'Deep Industry Knowledge and Regional Experience',
      description:
        'Years of experience across ports and maritime industries enable us to deliver trusted solutions.'
    }
  ];

  selectItem(index: number) {
    this.activeIndex = index;
  }








values: Value[] = [

    {
      id: 1,
      title: 'Integrity',
      icon: '🛡️',
      description:
        'We uphold honesty, transparency, and ethical practices in every survey and inspection.'
    },

    {
      id: 2,
      title: 'Excellence',
      icon: '⚡',
      description:
        'We strive for the highest quality standards in every marine inspection.'
    },

    {
      id: 3,
      title: 'Safety',
      icon: '🔒',
      description:
        'Safety is our highest priority in every operation.'
    },

    {
      id: 4,
      title: 'Professionalism',
      icon: '🎁',
      description:
        'Our team delivers professional and reliable services worldwide.'
    },

    {
      id: 5,
      title: 'Client',
      icon: '👥',
      description:
        'Client satisfaction is at the heart of everything we do.'
    },

    {
      id: 6,
      title: 'Innovation',
      icon: '💡',
      description:
        'We incorporate cutting-edge technology, such as drone inspections, and continuously improve our processes.'
    },

    {
      id: 7,
      title: 'Environment',
      icon: '🍃',
      description:
        'We are committed to protecting the marine environment.'
    }

  ];

  selectedValue = this.values[5];

  selectValue(value: Value) {
    this.selectedValue = value;
  }

}