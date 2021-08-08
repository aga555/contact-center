import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactService} from '../../services/contact.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

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
      firstname: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
      gender: new FormControl(),
      email: new FormControl(),
      phone: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
      dob: new FormControl(),
      img: new FormControl(),
      city: new FormControl(),
      country: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
      state: new FormControl()
    });
  }

  saveChanges() {
    this.service.updateContact(this.contactFormEdit.value)
      .subscribe(contact => {
        this.router.navigate(['/contact-details', contact.id]);

      });
  }

  cancel() {
    this.router.navigate(['/list']);
  }
}
