import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaroCardComponent } from './taro-card.component';

describe('TaroCardComponent', () => {
  let component: TaroCardComponent;
  let fixture: ComponentFixture<TaroCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaroCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaroCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
