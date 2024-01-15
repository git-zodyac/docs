import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZodEnvComponent } from './zod-env.component';

describe('ZodEnvComponent', () => {
  let component: ZodEnvComponent;
  let fixture: ComponentFixture<ZodEnvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZodEnvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZodEnvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
