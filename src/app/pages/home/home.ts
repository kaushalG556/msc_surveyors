import { Component, Service } from '@angular/core';
import { Header } from '../../components/header/header';
import { Hero } from '../../components/hero/hero';
import { Comprehensive } from '../../components/comprehensive/comprehensive';
import { Services } from '../../components/services/services';
import { Gallery } from '../../components/gallery/gallery';
import { Aboutcom } from '../../components/aboutcom/aboutcom';
import { Contactcom } from '../../components/contactcom/contactcom';
import { Footer } from '../../components/footer/footer';
import { RequestInspection } from '../../components/request-inspection/request-inspection';
import { FormContact } from '../../components/form-contact/form-contact';

@Component({
  selector: 'app-home',
  imports: [Hero,Comprehensive,Services,Gallery,Aboutcom,Contactcom,RequestInspection,FormContact],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
