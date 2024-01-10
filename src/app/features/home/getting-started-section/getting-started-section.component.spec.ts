import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GettingStartedSectionComponent } from './getting-started-section.component';

describe('GettingStartedSectionComponent', () => {
  let component: GettingStartedSectionComponent;
  let fixture: ComponentFixture<GettingStartedSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GettingStartedSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GettingStartedSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
