import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiEnginesComponent } from './api-engines.component';

describe('ApiEnginesComponent', () => {
  let component: ApiEnginesComponent;
  let fixture: ComponentFixture<ApiEnginesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApiEnginesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApiEnginesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
