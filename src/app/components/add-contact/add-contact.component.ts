import {Component, OnInit} from '@angular/core';
import {Contact} from '../../model/contact';
import {ContactService} from '../../services/contact.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  contact: Contact;

  constructor(private service: ContactService, private router: Router) {
  }

  ngOnInit(): void {
    this.contact = new Contact();
  }

  addContact() {
    this.service.addNewContact(this.contact).subscribe(contact => {
      alert('Added new contact' + contact.id);
      this.router.navigate(['/contact-details', contact.id]);
    });
  }
}
