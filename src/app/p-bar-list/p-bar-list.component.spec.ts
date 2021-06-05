import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PBarListComponent } from './p-bar-list.component';

describe('PBarListComponent', () => {
  let component: PBarListComponent;
  let fixture: ComponentFixture<PBarListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PBarListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PBarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
