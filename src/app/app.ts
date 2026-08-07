import { Component,afterNextRender, signal } from '@angular/core';
import AOS from "aos";
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App{

  protected readonly title = signal('msc_surveyors_p');

  constructor() {
    afterNextRender(() => {
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
      });
    });
  }
}