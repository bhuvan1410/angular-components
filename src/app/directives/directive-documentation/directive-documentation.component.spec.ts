import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveDocumentationComponent } from './directive-documentation.component';

describe('DirectiveDocumentationComponent', () => {
  let component: DirectiveDocumentationComponent;
  let fixture: ComponentFixture<DirectiveDocumentationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectiveDocumentationComponent]
    });
    fixture = TestBed.createComponent(DirectiveDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
