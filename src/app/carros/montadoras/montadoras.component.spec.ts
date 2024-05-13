import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MontadorasComponent } from './montadoras.component';

describe('MontadorasComponent', () => {
  let component: MontadorasComponent;
  let fixture: ComponentFixture<MontadorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MontadorasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MontadorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
