import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDocumentationComponent } from './service-documentation.component';

describe('ServiceDocumentationComponent', () => {
  let component: ServiceDocumentationComponent;
  let fixture: ComponentFixture<ServiceDocumentationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceDocumentationComponent]
    });
    fixture = TestBed.createComponent(ServiceDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
