import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainingComponent } from './maining.component';

describe('MainingComponent', () => {
  let component: MainingComponent;
  let fixture: ComponentFixture<MainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
