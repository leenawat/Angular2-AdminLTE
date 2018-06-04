import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JhosFooterComponent } from './jhos-footer.component';

describe('JhosFooterComponent', () => {
  let component: JhosFooterComponent;
  let fixture: ComponentFixture<JhosFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JhosFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JhosFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
