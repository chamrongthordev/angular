import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngLessons';
  name: string = 'Chamrong';
  gender: string = 'M';
  age: number = 21;
}
