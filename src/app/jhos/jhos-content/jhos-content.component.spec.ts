import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JhosContentComponent } from './jhos-content.component';

describe('JhosContentComponent', () => {
  let component: JhosContentComponent;
  let fixture: ComponentFixture<JhosContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JhosContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JhosContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
