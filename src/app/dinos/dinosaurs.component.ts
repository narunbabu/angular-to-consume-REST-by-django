import { Component, OnInit } from '@angular/core';
import { DinosaurService } from '../dinosaurService';
import { Dino} from '../dino';

@Component({
  selector: 'dinosaurs',
  templateUrl: './dinosaurs.component.html',
  styleUrls:['./dinosaurs.component.css'],
})
// <a [routerLink]="['/dinosaurs', dino.url[32]]">
// </a>
export class DinosaurComponent implements OnInit {
  dinos: Dino[];
  dino: Dino;
  error: any;
  selectedDino:Dino;
  constructor(private dinosaurService: DinosaurService) { }

  getDinos() {
    this.dinosaurService
        .getDinos()
        .then(dinos => this.dinos = dinos)
        .catch(error => this.error = error);
  }

  ngOnInit() {
    this.getDinos();
  }
   getDino(id) {
    return this.dinosaurService
        .getDino(id)
        .then(dino => this.dino = dino)
        .catch(error => this.error = error);
        // console.log('inside getDino ');
 }
 selectDino(dino: Dino): void {
  // this.selectedDino = dino;
 this.dinosaurService
  .getDino(dino.id)
  .then(dino => this.selectedDino= dino)
  .catch(error => this.error = error);
}

}
