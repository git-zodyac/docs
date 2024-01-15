import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZodExpressComponent } from './zod-express.component';

describe('ZodExpressComponent', () => {
  let component: ZodExpressComponent;
  let fixture: ComponentFixture<ZodExpressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZodExpressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZodExpressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
