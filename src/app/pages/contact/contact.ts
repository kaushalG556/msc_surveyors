import { Component } from '@angular/core';
import { FormContact } from '../../components/form-contact/form-contact';

@Component({
  selector: 'app-contact',
  imports: [FormContact],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {}
