import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSlider, MatSliderModule } from '@angular/material';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { HomepageComponent } from './core/Homepage/homepage.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/Footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSlideToggleModule,
    NgxSliderModule
  ],
  exports:[
    MatSliderModule,
    MatSlider,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
