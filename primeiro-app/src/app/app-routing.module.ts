import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListComponent } from './pages/client-list/client-list.component';
import { HoursListComponent } from './pages/hours-list/hours-list.component';

const routes: Routes = [
  {path:'Client', component: ClientListComponent},
  {path:'Hours', component: HoursListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
