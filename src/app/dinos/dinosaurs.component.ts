import { Component, OnInit } from '@angular/core';
import { DinosaurService } from '../dinosaurService';
import { Dino} from '../dino';

@Component({
  selector: 'dinosaurs',
  template: `<ul><li *ngFor="let dino of dinos">
  
  <a [routerLink]="['/dinosaurs', dino.url[32]]">
        {{dino.species}} 
      </a>
  </li></ul>`
})
export class DinosaurComponent implements OnInit {
  dinos: Dino[];
  error: any;

  constructor(private dinosaurService: DinosaurService) { }

  getDinos() {
    this.dinosaurService
        .getDinos()
        .then(dinos => this.dinos = dinos)
        .catch(error => this.error = error);
  }

  ngOnInit() {
    this.getDinos();
        // this.dinosaurService
      // .getAll()
      // .subscribe(
      //    /* happy path */ p => this.people = p,
      //    /* error path */ e => this.errorMessage = e,
      //    /* onCompleted */ () => this.isLoading = false);
  }


}
