import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterSpinnerComponent } from './router-spinner.component';

describe('RouterSpinnerComponent', () => {
  let component: RouterSpinnerComponent;
  let fixture: ComponentFixture<RouterSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterSpinnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RouterSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
