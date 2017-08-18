import { Component } from '@angular/core';
import { DinosaurComponent } from './dinos/dinosaurs.component';
import { DinosaurService } from './dinosaurService';

// @Component({
//   selector: 'my-app',
  // template: `<h1>Hello {{name}}<span *ngIf="itIsJuly">, DjangoCon</span>!</h1>
  //             <dinosaurs></dinosaurs>`,
  // providers: [DinosaurService]
// })

// export class AppComponent {
//   name:string = 'World'
//   itIsJuly:boolean

//   constructor() {
//       var date = new Date()
//       this.itIsJuly = (date.getMonth() == 6 && date.getFullYear() == 2016)
//   }
// }
// import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DinosaurService]
})
export class AppComponent {
  title = 'Star Wars PPlz!!!';
}

