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

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'list',
    component: ListContactsComponent,
  },
  {
    path: 'contact-details',
    component: ContactDetailsComponent,
  },

];

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

  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
