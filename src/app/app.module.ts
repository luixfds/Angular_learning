import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponentComponent } from './components/sidebar-component/sidebar-component.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DiretiveComponent } from './components/diretive/diretive.component';
import { IfrenderComponent } from './components/ifrender/ifrender.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponentComponent,
    ParentDataComponent,
    DiretiveComponent,
    IfrenderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
