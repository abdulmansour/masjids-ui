import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMasjidComponent } from './search-masjid.component';

describe('SearchMasjidComponent', () => {
  let component: SearchMasjidComponent;
  let fixture: ComponentFixture<SearchMasjidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchMasjidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMasjidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
