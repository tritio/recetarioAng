import { Ingrediente } from '../shared/ingredientes.model';

export class Recipe {
    public nombre: string;
    public descripcion: string;
    public imagePath: string;
    public ingredientes: Ingrediente[];

    constructor(nombre: string, desc: string, imagePath: string, ingredientes: Ingrediente[]) {
        this.nombre = nombre;
        this.descripcion = desc;
        this.imagePath = imagePath;
        this.ingredientes = ingredientes;
    }
}