export class persona{
    id?: number;
    nombre: string;
    apellido: string;
    //img: String;

    constructor(nombre: string, apellido: string){//, img: String){
        this.nombre = nombre;
        this.apellido = apellido;
        //this.img = img;
    }
}