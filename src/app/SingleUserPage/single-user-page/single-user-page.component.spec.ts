import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleUserPageComponent } from './single-user-page.component';

describe('SingleUserPageComponent', () => {
  let component: SingleUserPageComponent;
  let fixture: ComponentFixture<SingleUserPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleUserPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
