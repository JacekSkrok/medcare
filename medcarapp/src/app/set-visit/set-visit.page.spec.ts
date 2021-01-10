import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SetVisitPage } from './set-visit.page';

describe('SetVisitPage', () => {
  let component: SetVisitPage;
  let fixture: ComponentFixture<SetVisitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetVisitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SetVisitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
