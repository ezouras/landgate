import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderWideComponent } from './header-wide.component';

describe('HeaderWideComponent', () => {
  let component: HeaderWideComponent;
  let fixture: ComponentFixture<HeaderWideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderWideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderWideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
