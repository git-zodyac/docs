import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchitectureSectionComponent } from './architecture-section.component';

describe('ArchitectureSectionComponent', () => {
  let component: ArchitectureSectionComponent;
  let fixture: ComponentFixture<ArchitectureSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchitectureSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArchitectureSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
