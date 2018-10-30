import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostTitleComponent } from './blog-post-title.component';

describe('BlogPostTitleComponent', () => {
  let component: BlogPostTitleComponent;
  let fixture: ComponentFixture<BlogPostTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogPostTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
