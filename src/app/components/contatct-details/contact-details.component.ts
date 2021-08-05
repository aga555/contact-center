import {Component, OnInit} from '@angular/core';
import {Contact} from '../../model/contact';
import {ContactService} from '../../services/contact.service';

@Component({
  selector: 'app-contatct-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  contact: Contact;

  constructor(private  service: ContactService) {
  }

  ngOnInit(): void {
    this.contact = new Contact();
    this.contact.id = 1;
    this.contact.firstname = 'Agnieszka';
    this.contact.lastname = 'Krawczyk';
    this.contact.email = 'aga@gmai.com';
    this.contact.img = 'https://cdn.pixabay.com/photo/2017/10/26/01/04/woman-2889882_960_720.jpg';
    this.contact.city = 'Warsaw';
    this.contact.country = 'Poland';
    this.contact.phone = '123456456';
    this.contact.state = 'mazovian';
    this.contact.dob = '01-01-2000';
    this.contact.gender = 'female';
  }

}
