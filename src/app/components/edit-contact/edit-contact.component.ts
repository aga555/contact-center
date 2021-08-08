import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactService} from '../../services/contact.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  contactFormEdit: FormGroup;

  constructor(private  activatedRoute: ActivatedRoute, private service: ContactService, private  router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.service.getContactDetails(params.id)
        .subscribe(contact => {
          this.contactFormEdit.setValue({...contact});
          console.log(contact);
        });
    });
    this.contactFormEdit = new FormGroup({
      id: new FormControl(),
      firstname: new FormControl(),
      lastname: new FormControl(),
      gender: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      dob: new FormControl(),
      img: new FormControl(),
      city: new FormControl(),
      country: new FormControl(),
      state: new FormControl()
    });
  }

  saveChanges() {
    this.service.updateContact(this.contactFormEdit.value)
      .subscribe(contact => {
        this.router.navigate(['/contact-details', contact.id] );

      });
  }
}
