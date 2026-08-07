import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  menuItems = [
    { name: 'Home', link: '/' },
    { name: 'About Us', link: '/about' },
    { name: 'Services', link: '/services' },
    { name: 'Quality', link: '/quality' },
    { name: 'Gallery', link: '/gallery' },
    { name: 'News', link: '/news' },
    { name: 'Contact', link: '/contact' },
  ];

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

isScrolled = false;
@HostListener('window:scroll', [])
onWindowScroll() {
  this.isScrolled = window.scrollY > 50;
}

  isSearchOpen = false;
  searchText = '';
  toggleSearch() {
    this.isSearchOpen = !this.isMenuOpen;
  }
  search() {
    console.log('Seaching:', this.searchText);
  }

  isLanguageOpen = false;
  selectedLanguage = 'EN';
  languages = ['EN'];

  toggleLanguage() {
    this.isLanguageOpen = !this.isLanguageOpen;
  }
  selectLanguage(lang: string) {
    this.selectedLanguage = lang;
    this.isLanguageOpen = false;
  }
}
