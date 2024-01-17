import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './main/about/about.component';
import { ClientComponent } from './main/client/client.component';
import { ContactComponent } from './main/contact/contact.component';
import { FooterComponent } from './main/footer/footer.component';
import { HeaderComponent } from './main/header/header.component';
import { MenuComponent } from './main/menu/menu.component';
import { ProductComponent } from './main/product/product.component';
import { AmlseriesComponent } from './main/product/productdetails/amlseries/amlseries.component';
import { StoreComponent } from './main/store/store.component';
import { MainComponent } from './main/main.component';

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

    AmlseriesComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,

    provideFirebaseApp(() =>
      initializeApp({
        apiKey: 'AIzaSyBHCMd5xcFugzuGq9VnPmhgObw--9uEtro',
        authDomain: 'blocktech-a0323.firebaseapp.com',
        projectId: 'blocktech-a0323',
        storageBucket: 'blocktech-a0323.appspot.com',
        messagingSenderId: '199642480203',
        appId: '1:199642480203:web:5587265b4a543c923197ce',
        measurementId: 'G-YYCGL2VD5R',
      })
    ),
  ],
  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
