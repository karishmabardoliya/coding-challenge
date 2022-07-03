import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlShortComponent } from './url-short.component';

describe('UrlShortComponent', () => {
  let component: UrlShortComponent;
  let fixture: ComponentFixture<UrlShortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlShortComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrlShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
