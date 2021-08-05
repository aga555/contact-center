import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {HomeComponent} from './components/home/home.component';
import {SiderbarComponent} from './components/siderbar/siderbar.component';
import {ContactDetailsComponent} from './components/contatct-details/contact-details.component';
import {FullnamePipe} from './pipes/fullname.pipe';
import {HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SiderbarComponent,
    ContactDetailsComponent,
    FullnamePipe,
    FooterComponent,

  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
