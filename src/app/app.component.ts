import { Component } from '@angular/core';
import { Producto } from './Models/producto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lista-compra';
  
  productosSeleccionados:Producto[]
  productosComprados:Producto[];
  
  constructor(){
    this.productosSeleccionados=[]
    this.productosComprados=[];
  }

  onProductoCreado($event:Producto){
    this.productosSeleccionados.push($event);
  }

  onProductoSeleccionado($event:number){
    let producto=this.productosSeleccionados.splice($event,1);
    this.productosComprados.push(producto[0])
  }

  onProductoNoSeleccionado($event:number){
    let producto=this.productosComprados.splice($event,1);
    this.productosSeleccionados.push(producto[0])
  }
}
