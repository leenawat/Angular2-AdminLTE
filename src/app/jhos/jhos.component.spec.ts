import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JhosComponent } from './jhos.component';

describe('JhosComponent', () => {
  let component: JhosComponent;
  let fixture: ComponentFixture<JhosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JhosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
