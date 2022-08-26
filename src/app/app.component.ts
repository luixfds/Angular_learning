import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  userName = "sua2ca";

  data = {
    name: 'luis',
    birth_date: '19/05/2003',
    role: 'meio oficial',
    departament: 'ETS',
    CPF: 4324324
  }

  title = 'aula1';
}
