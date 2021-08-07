import {Component, OnInit} from '@angular/core';
import {Contact} from '../../model/contact';
import {ContactService} from '../../services/contact.service';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css']
})
export class ListContactsComponent implements OnInit {

  contacts: Contact[];
  pageNumb: number = 1;

  constructor(private service: ContactService) {
  }

  ngOnInit(): void {
    this.service.getAllContacts()
      .subscribe(data => this.contacts = data);
  }

  loadMoreContacts() {
    this.pageNumb++;
    this.service.getAllContacts(this.pageNumb).subscribe(
      data => this.contacts = [...this.contacts, ...data]
    );
  }
}
