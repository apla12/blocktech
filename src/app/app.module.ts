import { NgModule } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './main/about/about.component';
import { ClientComponent } from './main/client/client.component';
import { ContactComponent } from './main/contact/contact.component';
import { FooterComponent } from './main/footer/footer.component';
import { HeaderComponent } from './main/header/header.component';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './main/menu/menu.component';
import { ProductComponent } from './main/product/product.component';
import { AMLseriesComponent } from './main/product/productdetails/AMLseries/AMLseries.component';
import { BtaseriesComponent } from './main/product/productdetails/btaseries/btaseries.component';
import { StoreComponent } from './main/store/store.component';

import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BcseriesComponent } from './main/product/productdetails/bcseries/bcseries.component';
import { BtseriesComponent } from './main/product/productdetails/btseries/btseries.component';
import { ProductallComponent } from './main/product/productdetails/productall/productall.component';
import { BEseriesComponent } from './main/product/productdetails/BEseries/BEseries.component';
import { BLseriesComponent } from './main/product/productdetails/BLseries/BLseries.component';
import { BARseriesComponent } from './main/product/productdetails/BARseries/BARseries.component';
import { BRLseriesComponent } from './main/product/productdetails/BRLseries/BRLseries.component';
import { PFLseriesComponent } from './main/product/productdetails/PFLseries/PFLseries.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProductComponent,
    ClientComponent,
    ContactComponent,
    StoreComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    MainComponent,

    ProductallComponent,
    AMLseriesComponent,
    BtaseriesComponent,
    BtseriesComponent,
    BcseriesComponent,
    BEseriesComponent,
    BLseriesComponent,
    BARseriesComponent,
    BRLseriesComponent,
    PFLseriesComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,

    NgxBootstrapIconsModule.pick(allIcons),

    provideFirebaseApp(() =>
      initializeApp({
        apiKey: 'AIzaSyDmEh8qgdKCE2kv3hn7MbTkARJ255orZP4',
        authDomain: 'blocktech-c88a6.firebaseapp.com',
        projectId: 'blocktech-c88a6',
        storageBucket: 'blocktech-c88a6.appspot.com',
        messagingSenderId: '735171601511',
        appId: '1:735171601511:web:8a4df6db06c1a35bfd20c2',
        measurementId: 'G-KRWMJVGPSF',
      })
    ),

    NgbModule,
    CarouselModule,
    TabsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
