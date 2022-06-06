import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalVendedorComponent } from './portal-vendedor.component';

describe('PortalVendedorComponent', () => {
  let component: PortalVendedorComponent;
  let fixture: ComponentFixture<PortalVendedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalVendedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
