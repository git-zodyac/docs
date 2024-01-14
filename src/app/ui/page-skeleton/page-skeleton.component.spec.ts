import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSkeleton } from './page-skeleton.component';

describe('PageSkeletonComponent', () => {
  let component: PageSkeleton;
  let fixture: ComponentFixture<PageSkeleton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageSkeleton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageSkeleton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
