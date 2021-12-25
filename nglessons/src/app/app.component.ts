import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchTerm: string = '';
  resultRequesting: string = '';

  handleSearch($event: any) {
    this.searchTerm = $event.target.value;
  }

  handleInput($event: any) {
    this.resultRequesting = $event.target.value;
  }
}
