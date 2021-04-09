import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateforComponent } from './templatefor.component';

describe('TemplateforComponent', () => {
  let component: TemplateforComponent;
  let fixture: ComponentFixture<TemplateforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
