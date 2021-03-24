import { Component } from '@angular/core';
import { DeseoService } from '../../services/deseo.service';
import { Lista } from '../../models/lista.model';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  

  constructor(public deseos:DeseoService,
              public router: Router,
              public alerta:AlertController        
    ) {
  
  }


 async agregarPage(){


    //

    const alert = await this.alerta.create({
      cssClass: 'my-custom-class',
      header: 'Nueva tarea',
    
      inputs	: [
        {
          name:'title',
          type:'text',
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
        text:'Crear',
        handler:(data)=>{
          console.log(data);
          if(data.title.length == 0 ){
              return
          }
          const listaId =  this.deseos.crearLista(data.title)
          this.router.navigateByUrl(`/tabs/tab1/agregar/${listaId}`)

        }
      }
    ]
    });

   alert.present();
  }

  detalles(lista:Lista){
    console.log(lista);
    this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`)
  }


}
