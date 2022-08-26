import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretiveComponent } from './diretive.component';

describe('DiretiveComponent', () => {
  let component: DiretiveComponent;
  let fixture: ComponentFixture<DiretiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiretiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
