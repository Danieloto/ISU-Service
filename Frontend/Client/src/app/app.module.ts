import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { OfferingService } from './offering.service';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    DashboardComponent,
    HeaderComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    FormsModule
=======
    HttpClientModule
>>>>>>> face553e426b98736a9aa185e26ce5f3637bd849
  ],
  providers: [OfferingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
