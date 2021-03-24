import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeseoService } from '../../services/deseo.service';
import { Lista } from '../../models/lista.model';
import { ListaItem } from '../../models/lista-item.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage {
  



  lista:Lista
  nombreItem = ''
  constructor(private deseos:DeseoService,
              private route:ActivatedRoute          
    ) {
      const listaId = this.route.snapshot.paramMap.get('listaId')
        
     this.lista= this.deseos.obtenerId(listaId)

      console.log(this.lista);
     }



     agegarItem(){
       if(this.nombreItem.length === 0){
         return
       }

       const nuevoItem = new ListaItem(this.nombreItem)

      this.lista.items.push(nuevoItem)

      this.nombreItem = ''

      this.deseos.setData()
     }

     
     cambioEstado(item:ListaItem){
          console.log(item);
        const pendientes = this.lista.items.filter(itemLista=>{
          return itemLista.terminado==false
        }).length
        console.log({pendientes});

        if(pendientes ===0){
            this.lista.terminada = true;
            this.lista.terminadoEn = new Date()
        }else{
          this.lista.terminada = false;
          this.lista.terminadoEn = null
        }
        console.log(this.lista);

          this.deseos.setData()
     }  
  

     borrar(i:number){


      this.lista.items.splice(i,1)


      
      this.deseos.setData()
     }

}
