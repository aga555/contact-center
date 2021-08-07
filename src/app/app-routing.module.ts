import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ListContactsComponent} from './components/list-contacts/list-contacts.component';
import {ContactDetailsComponent} from './components/contatct-details/contact-details.component';

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

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
