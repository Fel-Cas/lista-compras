export class Producto{
    nombre:string;
    cantidad:number;
    departamento:string

    constructor(nombre:string='',cantidad:number=0, departamento:string='' ){
        this.cantidad=cantidad;
        this.departamento=departamento;
        this.nombre=nombre;

    }
}