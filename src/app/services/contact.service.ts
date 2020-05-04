import {Injectable} from '@angular/core';
import {Contact} from '../model/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() {
  }

  getContactDetails(id: number): Contact {
    let contact = new Contact();
    contact = new Contact();
    contact.id = id;
    contact.firstname = 'Jan';
    contact.lastname = 'Kowalski';
    contact.gender = 'Male';
    contact.email = 'jan@kowalki.com';
    contact.phone = '123-123-123';
    contact.img = 'https://image.freepik.com/darmowe-wektory/awatar-postaci-biznesmen-na-bialym-tle_24877-60111.jpg';
    contact.city = ' New York';
    contact.country = ' USA';
    contact.dob = '1974-01-01';
    return contact;
  }
}
