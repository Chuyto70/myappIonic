import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';
import { AlertController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class DeseoService {

  lista:Lista[]=[]

  constructor(private alerta:AlertController) { 

    this.getData()
   
  }



  crearLista(titulo:string){
    const nuevaLista = new Lista(titulo)

    this.lista.push(nuevaLista)
    this.setData()

    return nuevaLista.id
  }

  obtenerId(id:string | number){
     id = Number(id)

     return this.lista.find(data=>{
       return data.id===id
     })
  }


  

  setData(){
   localStorage.setItem('data', JSON.stringify(this.lista) )
  }
  getData(){
    if(localStorage.getItem('data')){
      this.lista = JSON.parse(localStorage.getItem('data')) 
    }
   
  }

  borrar(list:Lista){
 this.lista = this.lista.filter(listaData=>{
      return listaData !== list
    })
    this.setData()
  }


 async editar(list:Lista){
    const alert = await this.alerta.create({
      cssClass: 'my-custom-class',
      header: 'Editar tarea',
    
      inputs	: [
        {
          name:'title',
          type:'text',
          value:list.titulo,
          placeholder:'Nueva tarea'
        }
      ],
      buttons: [{
        text:'Cancelar',
        role:'cancel',
        handler:()=>{
          console.log('cancelado');
        }
      },
      {
        text:'Editar',
        handler:(data)=>{
        //  console.log(data);
          if(data.title.length == 0 ){
              return
          }
          list.titulo = data.title
          console.log(this.lista);
        
         this.setData()
        

        }
      }
      
    ]
  
    })
    alert.present()
  }
}
