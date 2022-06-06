import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule} from "./app-routing.module";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { SidenavComponent } from './components/template/portal-vendedor/sidevnav/sidenav.component';
import {PortalVendedorComponent} from "./views/portal-vendedor/portal-vendedor.component";
import {MatSidenavModule} from "@angular/material/sidenav";
import {ReactiveFormsModule} from "@angular/forms";
import {MatListModule} from "@angular/material/list";
import { ProdutosComponent } from './components/template/portal-vendedor/produtos/produtos.component';
import {MatTableModule} from "@angular/material/table";
import { FormProdutosComponent } from './components/template/portal-vendedor/form-produtos/form-produtos.component';
import {MatGridListModule} from "@angular/material/grid-list";

@NgModule({
  declarations: [
    AppComponent,
    PortalVendedorComponent,
    SidenavComponent,
    ProdutosComponent,
    FormProdutosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatListModule,
    MatTableModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
