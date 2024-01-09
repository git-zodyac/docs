import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreFeaturesSectionComponent } from './core-features-section.component';

describe('CoreFeaturesSectionComponent', () => {
  let component: CoreFeaturesSectionComponent;
  let fixture: ComponentFixture<CoreFeaturesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreFeaturesSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoreFeaturesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
