import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUsersPageComponent } from './list-users-page.component';

describe('ListUsersPageComponent', () => {
  let component: ListUsersPageComponent;
  let fixture: ComponentFixture<ListUsersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListUsersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUsersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
