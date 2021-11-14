import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { OnasComponent } from './onas/onas.component';
import { RezerwacjaComponent } from './rezerwacja/rezerwacja.component';

const routes: Routes = [
  { path: "menu", component: MenuComponent },
  { path: "onas", component: OnasComponent },
  { path: "rezerwacja", component: RezerwacjaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
