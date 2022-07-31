import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericMethodPageComponent } from './generic-method-page.component';

describe('GenericMethodPageComponent', () => {
  let component: GenericMethodPageComponent;
  let fixture: ComponentFixture<GenericMethodPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericMethodPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericMethodPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
