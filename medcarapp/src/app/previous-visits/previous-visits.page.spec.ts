import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PreviousVisitsPage } from './previous-visits.page';

describe('PreviousVisitsPage', () => {
  let component: PreviousVisitsPage;
  let fixture: ComponentFixture<PreviousVisitsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousVisitsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PreviousVisitsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
