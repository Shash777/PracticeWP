import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FcpComponent } from './fcp.component';

describe('FcpComponent', () => {
  let component: FcpComponent;
  let fixture: ComponentFixture<FcpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FcpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FcpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
