import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { ProductComponent } from './product/product.component';
import { StoreComponent } from './store/store.component';

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
