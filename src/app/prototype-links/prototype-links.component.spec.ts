import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrototypeLinksComponent } from './prototype-links.component';

describe('PrototypeLinksComponent', () => {
  let component: PrototypeLinksComponent;
  let fixture: ComponentFixture<PrototypeLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrototypeLinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrototypeLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
