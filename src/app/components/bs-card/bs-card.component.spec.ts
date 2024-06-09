import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsCardComponent } from './bs-card.component';

describe('BsCardComponent', () => {
  let component: BsCardComponent;
  let fixture: ComponentFixture<BsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BsCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
