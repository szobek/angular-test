import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeDescComponent } from './coffee-desc.component';

describe('CoffeeDescComponent', () => {
  let component: CoffeeDescComponent;
  let fixture: ComponentFixture<CoffeeDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoffeeDescComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoffeeDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
