export class persona{
    id?: number;
    nombre: string;
    apellido: string;
    direccion: string;
    telefono: string;
    email: string;
    presentacion: string;
    sobre_mi: string;
    //img: String;

    constructor(nombre: string, apellido: string, direccion: string, telefono: string, email: string, presentacion: string, sobre_mi:string){//, img: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.email = email;
        this.presentacion = presentacion;
        this.sobre_mi = sobre_mi;
        //this.img = img;
    }
}