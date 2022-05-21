import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/Models/producto.model';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  @Input() productos: Producto[]
  @Output() productoSeleccionado: EventEmitter<number>
  @Input() textoBoton:string;
  constructor() {
    this.productos=[];
    this.productoSeleccionado=new EventEmitter();
    this.textoBoton='';
   }

  ngOnInit(): void {
  }

  onClick(indice:number){
    this.productoSeleccionado.emit(indice)
  }

}