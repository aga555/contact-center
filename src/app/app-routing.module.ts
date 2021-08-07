import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ListContactsComponent} from './components/list-contacts/list-contacts.component';
import {ContactDetailsComponent} from './components/contatct-details/contact-details.component';
import {AddContactComponent} from './components/add-contact/add-contact.component';

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
    path: 'contact-details/:id',
    component: ContactDetailsComponent,
  },
  {
    path: 'add-contact',
    component: AddContactComponent,
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
