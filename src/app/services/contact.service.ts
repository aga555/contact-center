import {Injectable} from '@angular/core';
import {Contact} from '../model/contact';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private  http: HttpClient) {
  }

  getContactDetails(id: number): Contact {
    const contact = new Contact();
    contact.id = 1;
    contact.firstname = 'Agnieszka';
    contact.lastname = 'Krawczyk';
    contact.email = 'aga@gmai.com';
    contact.img = 'https://cdn.pixabay.com/photo/2017/10/26/01/04/woman-2889882_960_720.jpg';
    contact.city = 'Warsaw';
    contact.country = 'Poland';
    contact.phone = '123456456';
    contact.state = 'mazovian';
    contact.dob = '01-01-2000';
    contact.gender = 'female';
    return contact;
  }
}
