import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FemaleuserPageComponent } from './femaleuser-page.component';

describe('FemaleuserPageComponent', () => {
  let component: FemaleuserPageComponent;
  let fixture: ComponentFixture<FemaleuserPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FemaleuserPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FemaleuserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
