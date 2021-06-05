import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PBarComponent } from './p-bar.component';

describe('PBarComponent', () => {
  let component: PBarComponent;
  let fixture: ComponentFixture<PBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
