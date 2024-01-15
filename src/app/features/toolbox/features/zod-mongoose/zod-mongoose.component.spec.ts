import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZodMongooseComponent } from './zod-mongoose.component';

describe('ZodMongooseComponent', () => {
  let component: ZodMongooseComponent;
  let fixture: ComponentFixture<ZodMongooseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZodMongooseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZodMongooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
