import {Component, OnInit} from '@angular/core';
import {Contact} from '../../model/contact';
import {ContactService} from '../../services/contact.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-contatct-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  contact: Contact = new Contact();

  constructor(private  service: ContactService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(paramsData => {
      this.service.getContactDetails(paramsData.id).subscribe(
        data => {
          this.contact = data;
        }
      );
    });
  }

  deleteContact() {
    if (!confirm('Are you sure')) {
      return;
    }
    this.service.deleteContact(this.contact.id)
      .subscribe(() => {
        this.router.navigate(['/list']);
      });
  }

}
