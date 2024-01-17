import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownView } from './markdown-view.component';

describe('MarkdownViewComponent', () => {
  let component: MarkdownView;
  let fixture: ComponentFixture<MarkdownView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarkdownView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarkdownView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
