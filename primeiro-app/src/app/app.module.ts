import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientListComponent } from './pages/client-list/client-list.component';
import { Component1Component } from './components/component1/component1.component';
import { HeaderComponent } from './components/header/header.component';
import { HoursListComponent } from './pages/hours-list/hours-list.component';
import { FormsModule } from '@angular/forms';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { ProdutosDetalhesComponent } from './pages/produtos-detalhes/produtos-detalhes.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    Component1Component,
    HeaderComponent,
    HoursListComponent,
    ProdutosComponent,
    ProdutosDetalhesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
