import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/Models/producto.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() productoCreado:EventEmitter<Producto>;
  nuevoProducto:Producto;
  constructor() { 
    this.nuevoProducto = new Producto();
    this.productoCreado=new EventEmitter();
  }

  ngOnInit(): void {
  }

  onClick(){
    this.productoCreado.emit(this.nuevoProducto);
    this.nuevoProducto=new Producto();
  }

}
