import { ListaItem } from './lista-item.model';

export class Lista{


    id:number;
    titulo:string;
    creadoEn:Date;
    terminadoEn: Date;
    terminada: boolean;
    items: ListaItem[];
    constructor(titulo:string){

    this.titulo = titulo;
    this.creadoEn = new Date()
    this.terminada = false;
    this.items = [];
    this.id = new Date().getTime()
    }
} 