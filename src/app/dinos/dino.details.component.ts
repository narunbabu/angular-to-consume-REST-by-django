import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { DinosaurService } from "../dinosaurService";
import { Dino } from "../dino";

@Component({
  selector: 'app-dino-details',
  template: '<h1>This is to be seen {{dino}}</h1>',
  styles: []
})
export class DinoDetailsComponent implements OnInit {
//   professions: string[] = ['jedi', 'bounty hunter', 'princess', 'sith lord'];
  dino: Dino;
  sub:any;

  constructor(private route: ActivatedRoute,
              private dinoService: DinosaurService,
              private router: Router) { }
error: any;
// get(id: number): Observable<Dino> {
//      let dino= this.dinoService
//         .get(id);
//     return dino;
//   }
// get(id: number): Observable<Dino> {
//     let person$ = this.http
//       .get(`${this.baseUrl}/people/${id}`, {headers: this.getHeaders()})
//       .map(mapPerson)
//       .catch(handleError);
//       return person$;
//   }
  get(id: number) {
    this.dinoService
        .getDinos()
        .then(dino => this.dino = dino)
        .catch(error => this.error = error);
  }
   ngOnInit() { 
    this.sub = this.route.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      console.log('getting person with id: ', id);
      this.dinoService
        .get(id)
        
    });
  }

}
