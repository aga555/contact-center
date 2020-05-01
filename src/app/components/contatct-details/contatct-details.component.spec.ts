import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatctDetailsComponent } from './contatct-details.component';

describe('ContatctDetailsComponent', () => {
  let component: ContatctDetailsComponent;
  let fixture: ComponentFixture<ContatctDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContatctDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatctDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
