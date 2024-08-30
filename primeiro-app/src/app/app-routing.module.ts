import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListComponent } from './pages/client-list/client-list.component';
import { HoursListComponent } from './pages/hours-list/hours-list.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { ProdutosDetalhesComponent } from './pages/produtos-detalhes/produtos-detalhes.component';

const routes: Routes = [
  {path:'Client', component: ClientListComponent},
  {path:'Hours', component: HoursListComponent},
  {path:'Produtos', component:ProdutosComponent, children:[
    {path: ':id', component:ProdutosDetalhesComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
