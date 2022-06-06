import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PortalVendedorComponent} from "./views/portal-vendedor/portal-vendedor.component";
import {ProdutosComponent} from "./components/template/portal-vendedor/produtos/produtos.component";
import {FormProdutosComponent} from "./components/template/portal-vendedor/form-produtos/form-produtos.component";

const routes: Routes = [
  {
    path: "seller",
    component: PortalVendedorComponent,
    children: [
      {path: "products", component: ProdutosComponent},
      {path: "products/form", component: FormProdutosComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
