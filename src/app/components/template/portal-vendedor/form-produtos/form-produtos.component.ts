import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Product} from "../../../../model/produto-model";

@Component({
  selector: 'app-form-produtos',
  templateUrl: './form-produtos.component.html',
  styleUrls: ['./form-produtos.component.css']
})
export class FormProdutosComponent implements OnInit {

  produto: Product = {}

  constructor(private router: Router) {
    this.produto = <Product>this.router.getCurrentNavigation()?.extras.state;
  }

  ngOnInit(): void {
  }
}
