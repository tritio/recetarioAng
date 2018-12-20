export class Recipe {
    public nombre: string;
    public descripcion: string;
    public imagePath: string;

    constructor(nombre: string, desc: string, imagePath: string) {
        this.nombre = nombre;
        this.descripcion = desc;
        this.imagePath = imagePath;
    }
}