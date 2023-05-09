import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NehaCompComponent } from './neha-comp.component';

describe('NehaCompComponent', () => {
  let component: NehaCompComponent;
  let fixture: ComponentFixture<NehaCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NehaCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NehaCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
