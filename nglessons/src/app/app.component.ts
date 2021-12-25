import {Component} from '@angular/core';

interface UserModel {
  name: string,
  gender: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  users: UserModel[] = [
    {
      name: 'Chamrong',
      gender: 'M'
    },
    {
      name: 'Lam',
      gender: 'F'
    }
  ];
}
