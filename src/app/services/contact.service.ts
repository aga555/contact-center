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

  getContactDetails(id: number): Observable<any> {
    return this.http.get('http://localhost:4300/contacts/' + id);
  }
}
