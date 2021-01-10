import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegisterEntryPage } from './register-entry.page';

describe('RegisterEntryPage', () => {
  let component: RegisterEntryPage;
  let fixture: ComponentFixture<RegisterEntryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterEntryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterEntryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
