import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../../../model/produto-model";



const ELEMENT_DATA: Product[] = [
  {codigo: 1, descricao: "Produto 1", referencia: "78900001", marca: "Marca", estoque: 1},
  {codigo: 2, descricao: "Produto 2", referencia: "78900002", marca: "Marca", estoque: 3},
  {codigo: 3, descricao: "Produto 3", referencia: "78900003", marca: "Marca", estoque: 61},
  {codigo: 4, descricao: "Produto 4", referencia: "78900004", marca: "Marca", estoque: 64},
  {codigo: 5, descricao: "Produto 5", referencia: "78900005", marca: "Marca", estoque: 1},
  {codigo: 6, descricao: "Produto 6", referencia: "78900006", marca: "Marca", estoque: 6},
  {codigo: 7, descricao: "Produto 7", referencia: "78900007", marca: "Marca", estoque: 25}
];

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  displayedColumns: string[] = ['codigo', 'descricao', 'referencia', 'marca', 'estoque'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onClickRow(row: Product) {
    this.router.navigate(['/seller/products/form'], {relativeTo: this.route, state: row})
  }

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

}
