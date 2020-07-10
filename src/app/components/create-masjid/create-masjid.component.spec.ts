import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMasjidComponent } from './create-masjid.component';

describe('CreateMasjidComponent', () => {
  let component: CreateMasjidComponent;
  let fixture: ComponentFixture<CreateMasjidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMasjidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMasjidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
