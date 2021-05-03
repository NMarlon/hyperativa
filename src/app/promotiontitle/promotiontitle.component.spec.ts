import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotiontitleComponent } from './promotiontitle.component';

describe('PromotiontitleComponent', () => {
  let component: PromotiontitleComponent;
  let fixture: ComponentFixture<PromotiontitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotiontitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotiontitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
