import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlluserPageComponent } from './alluser-page.component';

describe('AlluserPageComponent', () => {
  let component: AlluserPageComponent;
  let fixture: ComponentFixture<AlluserPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlluserPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlluserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
