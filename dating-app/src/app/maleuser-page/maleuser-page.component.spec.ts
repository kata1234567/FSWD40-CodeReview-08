import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaleuserPageComponent } from './maleuser-page.component';

describe('MaleuserPageComponent', () => {
  let component: MaleuserPageComponent;
  let fixture: ComponentFixture<MaleuserPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaleuserPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaleuserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
