import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretive',
  templateUrl: './diretive.component.html',
  styleUrls: ['./diretive.component.scss']
})
export class DiretiveComponent implements OnInit {

  size = 40;
  colorr = 'red';
  padding = '1rem';
  classes = ['btn', 'font'];

  constructor() { }

  ngOnInit(): void {
  }

}
