import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ifrender',
  templateUrl: './ifrender.component.html',
  styleUrls: ['./ifrender.component.scss']
})
export class IfrenderComponent implements OnInit {

  canshow: boolean = true;
  name: string = 'luis'

  constructor() { }

  ngOnInit(): void {
  }

}
