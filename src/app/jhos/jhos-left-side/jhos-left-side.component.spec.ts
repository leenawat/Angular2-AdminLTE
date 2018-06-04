import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JhosLeftSideComponent } from './jhos-left-side.component';

describe('JhosLeftSideComponent', () => {
  let component: JhosLeftSideComponent;
  let fixture: ComponentFixture<JhosLeftSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JhosLeftSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JhosLeftSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
