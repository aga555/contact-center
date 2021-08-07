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
import {RouterModule, Routes} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import {FormsModule} from '@angular/forms';


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

  ],
  imports: [
    BrowserModule, HttpClientModule, AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
