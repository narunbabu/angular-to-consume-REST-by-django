import { Component } from '@angular/core';
import { DinosaurComponent } from './dinos/dinosaurs.component';
import { DinosaurService } from './dinosaurService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DinosaurService]
})
export class AppComponent {
  title = 'Star Wars PPlz!!!';
}

