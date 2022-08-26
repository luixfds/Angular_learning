import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.scss']
})
export class ParentDataComponent implements OnInit {

  // iniciando dado com "algo"
  @Input() username: string = '';

  // iniciando os dados sem conteudo "!"
  @Input() data!: {name: string, birth_date: string, role: string, departament: string,  CPF: number};

  constructor() { }

  ngOnInit(): void {
  }

}
