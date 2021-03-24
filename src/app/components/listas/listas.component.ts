import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DeseoService } from '../../services/deseo.service';
import { Lista } from '../../models/lista.model';
import { Router } from '@angular/router';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {
  @ViewChild(IonList) elemento:IonList
  @Input() terminada = true
  constructor(public deseos:DeseoService,
           
              private router:Router           
    ) { }

  ngOnInit() {}
  detalles(lista:Lista){
    console.log(lista);
    if(this.terminada){
      this.router.navigateByUrl(`/tabs/tab2/agregar/${lista.id}`)
    }else{
      this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`)
    }
    
  }


  borrar(list:Lista){
    this.deseos.borrar(list)
  }
  editar(list:Lista){
    
    this.deseos.editar(list)
    this.elemento.closeSlidingItems()
  }
}
