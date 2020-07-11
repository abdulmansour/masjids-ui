import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AthanComponent } from './athan.component';

describe('AthanComponent', () => {
  let component: AthanComponent;
  let fixture: ComponentFixture<AthanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AthanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AthanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
