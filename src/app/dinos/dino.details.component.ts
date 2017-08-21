import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { DinosaurService } from "../dinosaurService";
import { Dino } from "../dino";

@Component({
  selector: 'app-dino-details',
   template: '<h1>This is to be seen  and </h1>',
  styles: []
})
export class DinoDetailsComponent implements OnInit {
//   professions: string[] = ['jedi', 'bounty hunter', 'princess', 'sith lord'];
  dino: Dino;
  error: any;
  sub: any;

  id;


  constructor(private route: ActivatedRoute,
    private dinosaurService: DinosaurService,
  private router: Router) { }

  getDino(id) {
    this.dinosaurService
        .getDino(id)
        .then(dino => this.dino = dino)
        .catch(error => this.error = error);
        // console.log('inside getDino ');
 }

  // ngOnInit(id) {
  //    this.getDino(id);
  //       // this.dinosaurService
  //     // .getAll()
  //     // .subscribe(
  //     //    /* happy path */ p => this.people = p,
  //     //    /* error path */ e => this.errorMessage = e,
  //     //    /* onCompleted */ () => this.isLoading = false);
  // }

  ngOnInit() { 
    this.sub = this.route.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      console.log('getting dino with id: ', id);
      this.id=id;
      this.dinosaurService
        .getDino(id);
        // console.log( this.dinosaurService.getDino(id));
        // .subscribe(p => this.dino = p);
        
    });
      console.log( this.sub);
  }
}


