import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterWideComponent } from './footer-wide.component';

describe('FooterWideComponent', () => {
  let component: FooterWideComponent;
  let fixture: ComponentFixture<FooterWideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterWideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterWideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
