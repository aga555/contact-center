import {Component, OnInit} from '@angular/core';
import {Contact} from '../../model/contact';

@Component({
  selector: 'app-contatct-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  contact: Contact;

  constructor() {
  }

  ngOnInit(): void {
    this.contact = new Contact();
    this.contact.id = 1;
    this.contact.firstname = 'Jan';
    this.contact.lastname = 'Kowalski';
    this.contact.gender = 'Male';
    this.contact.email = 'jan@kowalki.com';
    this.contact.phone = '123-123-123';
    this.contact.img = '';
    this.contact.city = ' New York';
    this.contact.country = ' USA';
    this.contact.dob = '1974-01-01';

  }

}
