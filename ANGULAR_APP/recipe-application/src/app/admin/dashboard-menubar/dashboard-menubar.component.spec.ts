import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMenubarComponent } from './dashboard-menubar.component';

describe('DashboardMenubarComponent', () => {
  let component: DashboardMenubarComponent;
  let fixture: ComponentFixture<DashboardMenubarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardMenubarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardMenubarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
