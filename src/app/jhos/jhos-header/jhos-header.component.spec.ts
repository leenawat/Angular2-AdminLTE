import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JhosHeaderComponent } from './jhos-header.component';

describe('JhosHeaderComponent', () => {
  let component: JhosHeaderComponent;
  let fixture: ComponentFixture<JhosHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JhosHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JhosHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
