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
//  get(id: number): Observable<Response> {
//     let dino$ = this.http
//       .get(`${this.baseUrl}/${id}/?format=json`)
//       .map(mapDino)
//       .catch(handleError);
//       return dino$;
//   }


  // get(id: number): Observable< Response> {
  //   let dino$ = this.http
  //     .get(`${this.baseUrl}/${id}/?format=json`)
  //     return dino$;
  // }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
function extractId(dinoData:any){
  let extractedId = dinoData.url.replace('http://127.0.0.1:8000/dinosaurs/','').replace('/','');
  return parseInt(extractedId);
}
function toDino(r:any): Dino{
  let person = <Dino>({
    id: extractId(r),
    url: r.url,
    species: r.name,

  });
  console.log('Parsed person:', person);
  return person;
}
function mapDino(response:Response): Dino{
   // toPerson looks just like in the previous example
   return toDino(response.json());
}

function handleError (error: any) {
  // log error
  // could be something more sofisticated
  let errorMsg = error.message || `Yikes! There was a problem with our hyperdrive device and we couldn't retrieve your data!`
  console.error(errorMsg);

  // throw an application level error
  return Observable.throw(errorMsg);
}