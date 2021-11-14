import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MenuComponent } from './menu/menu.component';
import { OnasComponent } from './onas/onas.component';
import { RezerwacjaComponent } from './rezerwacja/rezerwacja.component';

@NgModule({
  declarations: [AppComponent, NavComponent, MenuComponent, OnasComponent, RezerwacjaComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
