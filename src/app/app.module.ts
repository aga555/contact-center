import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {HomeComponent} from './components/home/home.component';
import {SiderbarComponent} from './components/siderbar/siderbar.component';
import {ContactDetailsComponent} from './components/contatct-details/contact-details.component';
import {FullnamePipe} from './pipes/fullname.pipe';
import {HttpClientModule} from '@angular/common/http';
import {FooterComponent} from './components/footer/footer.component';
import {ListContactsComponent} from './components/list-contacts/list-contacts.component';
import {AppRoutingModule} from './app-routing.module';
import {AddContactComponent} from './components/add-contact/add-contact.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EditContactComponent} from './components/edit-contact/edit-contact.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SiderbarComponent,
    ContactDetailsComponent,
    FullnamePipe,
    FooterComponent,
    ListContactsComponent,
    AddContactComponent,
    EditContactComponent,

  ],
  imports: [
    BrowserModule, HttpClientModule, AppRoutingModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
