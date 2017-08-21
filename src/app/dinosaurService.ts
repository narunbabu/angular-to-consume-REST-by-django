import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';
// import { DinosaurService } from '../dinosaurService';
import { Dino} from './dino';

@Injectable()
export class DinosaurService {
  private apiURL = 'http://localhost:8000/dinosaurs/?format=json';
  private baseUrl = 'http://127.0.0.1:8000/dinosaurs';

  constructor(private http: Http) { }

  getDinos() {
    return this.http.get(this.apiURL)
              .toPromise()
              .then(response => response.json())
              .catch(this.handleError);
  }
  
  getDino(id:number) {
    return this.http
      .get(`${this.baseUrl}/${id}/?format=json`)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }
  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.items || {};
  }
}
// function extractId(dinoData:any){
//   let extractedId = dinoData.url.replace('http://127.0.0.1:8000/dinosaurs/','').replace('/','');
//   return parseInt(extractedId);
// }

// function mapDino(response:Response): Dino{
//    // toDino looks just like in the previous example
//    return toDino(response.json());
// }

// function toDino(r:any): Dino{
//   let Dino = <Dino>({
//     id: extractId(r),
//     url: r.url,
//     species: r.species,

//   });
//   console.log('Parsed Dino:', Dino);
//   return Dino;
// }