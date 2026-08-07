import { Component, ElementRef, HostListener, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';


interface Standard {
  title: string;
  subtitle: string;
  category: string;
  description: string;
  points: string[];
  icon: string;
}
interface ProcessStep {
  number: string;
  title: string;
  description: string;
  points: string[];
  iconPath: string;
  image: string;
}

@Component({
  selector: 'app-quality',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quality.html',
  styleUrl: './quality.css'
})




export class Quality{
stats = [
  {
    number: "480+",
    title: "Technical Services",
    description: "Inspections and consultancies completed",
    image: "images/comprehensive/s1.jpg",

    color: "text-sky-400",
    icon: "📊",
    iconBg: "bg-sky-500/20 text-sky-400",
    glow: "hover:shadow-[0_20px_60px_rgba(56,189,248,0.45)]",
    glowColor: "bg-sky-400/40"
  },

  {
    number: "120+",
    title: "Corporate Clients",
    description: "Companies that trust us",
    image: "images/comprehensive/s2.jpg",

    color: "text-emerald-400",
    icon: "👥",
    iconBg: "bg-emerald-500/20 text-emerald-400",
    glow: "hover:shadow-[0_20px_60px_rgba(16,185,129,0.45)]",
    glowColor: "bg-emerald-400/40"
  },

  {
    number: "78%",
    title: "Recurrence Rate",
    description: "Clients who repeat services",
    image: "images/comprehensive/s3.jpg",

    color: "text-cyan-400",
    icon: "🔄",
    iconBg: "bg-cyan-500/20 text-cyan-400",
    glow: "hover:shadow-[0_20px_60px_rgba(6,182,212,0.45)]",
    glowColor: "bg-cyan-400/40"
  },

  {
    number: "95%",
    title: "Satisfaction Index",
    description: "Based on post-service feedback",
    image: "images/comprehensive/s4.avif",

    color: "text-yellow-400",
    icon: "👍",
    iconBg: "bg-yellow-500/20 text-yellow-400",
    glow: "hover:shadow-[0_20px_60px_rgba(250,204,21,0.45)]",
    glowColor: "bg-yellow-400/40"
  },

  {
    number: "22%",
    title: "Annual Growth",
    description: "Average service volume growth",
    image: "images/comprehensive/s5.jpg",

    color: "text-violet-400",
    icon: "📈",
    iconBg: "bg-violet-500/20 text-violet-400",
    glow: "hover:shadow-[0_20px_60px_rgba(168,85,247,0.45)]",
    glowColor: "bg-violet-400/40"
  },

  {
    number: "24-72h",
    title: "Delivery Time",
    description: "Depending on report complexity",
    image: "images/about-banner.avif",

    color: "text-pink-400",
    icon: "🕒",
    iconBg: "bg-pink-500/20 text-pink-400",
    glow: "hover:shadow-[0_20px_60px_rgba(236,72,153,0.45)]",
    glowColor: "bg-pink-400/40"
  }
];



standards: Standard[] = [
  {
    title: 'ISO 9001:2015',
    subtitle: 'Management System',
    category: 'QUALITY SYSTEM',
    description: 'Certified quality management processes for all marine survey operations.',
    points: ['Quality Policy', 'Continuous Improvement'],
    icon: '🛡️'
  },
  {
    title: 'IMO Conventions',
    subtitle: 'International Regulation',
    category: 'MARITIME',
    description: 'Compliance with International Maritime Organization regulations.',
    points: ['SOLAS', 'MARPOL'],
    icon: '⚓'
  },
  {
    title: 'Classification Societies',
    subtitle: 'Technical Standards',
    category: 'TECHNICAL',
    description: 'Compliance with leading classification societies.',
    points: ['ABS', 'DNV'],
    icon: '🏅'
  },
  {
    title: 'Flag State',
    subtitle: 'National Requirements',
    category: 'FLAG STATE',
    description: 'Requirements established by flag administrations.',
    points: ['Certificates', 'Audits'],
    icon: '🚢'
  },
  {
    title: 'P&I Insurers',
    subtitle: 'Insurance Sector',
    category: 'INSURANCE',
    description: 'Adherence to P&I and Hull & Machinery guidelines.',
    points: ['P&I Clubs', 'Hull & Machinery'],
    icon: '⚖️'
  },
  {
    title: 'Best Practices',
    subtitle: 'Global Industry',
    category: 'GLOBAL',
    description: 'International best practices for surveyors.',
    points: ['Safety', 'Risk Management'],
    icon: '🌍'
  }
];

selected = this.standards[0];

select(item: Standard) {
  this.selected = item;
}

// ############################################################################################################################

 
  // readonly ringCircumference = 552.9; // 2 * PI * r, r = 88
 
  // badge = 'Quality Process';
  // heading = 'Rigorous Quality Control';
  // intro = 'Every inspection goes through an internal review process to ensure accuracy, integrity and objectivity in all reports';
 
  // steps: ProcessStep[] = [
  //   {
  //     number: '01',
  //     title: 'Field Inspection',
  //     description: 'Our certified inspectors conduct comprehensive assessments following standardized international protocols and advanced methodologies.',
  //     points: ['ISO standardized protocols', 'Complete photographic documentation', 'Real-time findings recording'],
  //     iconPath: 'M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9 2 2 4-4',
  //     image: 'https://www.mscsurveyors.org/images/footage/IMG_20190406_095637.webp'
  //   },
  //   {
  //     number: '02',
  //     title: 'Technical Review',
  //     description: 'Detailed analysis of all inspection data and findings by senior experts with extensive experience in the maritime sector.',
  //     points: ['Collected data analysis', 'Measurement verification', 'Identified risk assessment'],
  //     iconPath: 'M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM21 21l-4.3-4.3',
  //     image: 'https://www.mscsurveyors.org/images/footage/IMG_20190406_180251.webp'
  //   },
  //   {
  //     number: '03',
  //     title: 'Compliance Verification',
  //     description: 'Validation that all applicable standards and regulations (IMO, ISO, Flag State) have been considered and met.',
  //     points: ['IMO conformity', 'ISO 9001 compliance', 'Flag State requirements'],
  //     iconPath: 'M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
  //     image: 'https://www.mscsurveyors.org/images/footage/IMG_20190406_180330.webp'
  //   },
  //   {
  //     number: '04',
  //     title: 'Peer Review',
  //     description: 'Cross-evaluation by independent professionals to ensure objectivity, impartiality and technical accuracy in each report.',
  //     points: ['Second technical opinion', 'Conclusions validation', 'Recommendations review'],
  //     iconPath: 'M17 20h5v-2a4 4 0 0 0-3-3.87M9 20H4v-2a4 4 0 0 1 3-3.87m5-2.13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm6 0a4 4 0 1 0 0-8',
  //     image: 'https://www.mscsurveyors.org/images/footage/IMG_20190406_180706.webp'
  //   },
  //   {
  //     number: '05',
  //     title: 'Final Assurance',
  //     description: 'Final control process that guarantees the integrity, accuracy and objectivity of the report before delivery to the client.',
  //     points: ['Final quality control', 'Format and presentation', 'Delivery in 24-72 hours'],
  //     iconPath: 'M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
  //     image: 'https://www.mscsurveyors.org/images/footage/IMG_20190406_180318.webp'
  //   }
  // ];
 
  // current = 0;
 
  // @ViewChild('scrollTrack', { static: true }) scrollTrack!: ElementRef<HTMLElement>;
 
  // ngAfterViewInit(): void {
  //   this.updateActiveStep();
  // }
 
  // @HostListener('window:scroll')
  // @HostListener('window:resize')
  // onScroll(): void {
  //   this.updateActiveStep();
  // }
 
  // get currentStep(): ProcessStep {
  //   return this.steps[this.current];
  // }
 
  // get progress(): number {
  //   return (this.current + 1) / this.steps.length;
  // }
 
  // get ringOffset(): number {
  //   return this.ringCircumference * (1 - this.progress);
  // }
 
  // get totalLabel(): string {
  //   return 'of 0' + this.steps.length;
  // }
 
  // goTo(index: number): void {
  //   // clicking a dot jumps the scroll position to that step's segment
  //   const track = this.scrollTrack?.nativeElement;
  //   if (!track) return;
  //   const total = this.steps.length;
  //   const trackTop = track.getBoundingClientRect().top + window.scrollY;
  //   const trackHeight = track.offsetHeight;
  //   const segment = trackHeight / total;
  //   window.scrollTo({ top: trackTop + segment * index + segment / 2, behavior: 'smooth' });
  // }
 
  // private updateActiveStep(): void {
  //   const track = this.scrollTrack?.nativeElement;
  //   if (!track) return;
 
  //   const total = this.steps.length;
  //   const rect = track.getBoundingClientRect();
  //   const trackHeight = track.offsetHeight;
  //   const viewportH = window.innerHeight;
 
  //   // how far we've scrolled into the track, clamped 0..1
  //   const scrolled = Math.min(Math.max(-rect.top, 0), trackHeight - viewportH);
  //   const scrollable = Math.max(trackHeight - viewportH, 1);
  //   const progress = scrolled / scrollable; // 0 -> 1 across the whole pinned section
 
  //   const index = Math.min(total - 1, Math.floor(progress * total));
  //   this.current = index;
  // }
}
 

