import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemaView } from './schema-view';

describe('SchemaView', () => {
  let component: SchemaView;
  let fixture: ComponentFixture<SchemaView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchemaView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchemaView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
