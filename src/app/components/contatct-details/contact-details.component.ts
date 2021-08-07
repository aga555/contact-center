import {Component, OnInit} from '@angular/core';
import {Contact} from '../../model/contact';
import {ContactService} from '../../services/contact.service';

@Component({
  selector: 'app-contatct-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  contact: Contact = new Contact();

  constructor(private  service: ContactService) {
  }

  ngOnInit(): void {
    this.service.getContactDetails(3).subscribe(
      data => {
        console.log(data);
        this.contact = data;
      }
    )
    ;
  }

}
