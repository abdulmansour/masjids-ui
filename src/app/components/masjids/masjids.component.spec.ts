import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasjidsComponent } from './masjids.component';

describe('MasjidsComponent', () => {
  let component: MasjidsComponent;
  let fixture: ComponentFixture<MasjidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasjidsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasjidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
