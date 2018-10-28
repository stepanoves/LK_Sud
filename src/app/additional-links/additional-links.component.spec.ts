import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalLinksComponent } from './additional-links.component';

describe('AdditionalLinksComponent', () => {
  let component: AdditionalLinksComponent;
  let fixture: ComponentFixture<AdditionalLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionalLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
