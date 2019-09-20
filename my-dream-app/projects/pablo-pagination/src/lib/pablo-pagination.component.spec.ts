import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PabloPaginationComponent } from './pablo-pagination.component';

describe('PabloPaginationComponent', () => {
  let component: PabloPaginationComponent;
  let fixture: ComponentFixture<PabloPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PabloPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PabloPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
