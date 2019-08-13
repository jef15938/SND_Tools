import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgZoneTestComponent } from './ng-zone-test.component';
import { FormsModule } from '@angular/forms';

describe('NgZoneTestComponent', () => {
  let component: NgZoneTestComponent;
  let fixture: ComponentFixture<NgZoneTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ NgZoneTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgZoneTestComponent);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
  });

  function setup() { 
    const fixture = TestBed.createComponent(NgZoneTestComponent);
    const app = fixture.debugElement.componentInstance;
    return {fixture, app};
  }

  it('.....should create', () => {

    component.ngOnInit();
    
    expect(component).toBeTruthy();
  });
});
