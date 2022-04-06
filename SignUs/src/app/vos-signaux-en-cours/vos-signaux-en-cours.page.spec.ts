import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VosSignauxEnCoursPage } from './vos-signaux-en-cours.page';

describe('VosSignauxEnCoursPage', () => {
  let component: VosSignauxEnCoursPage;
  let fixture: ComponentFixture<VosSignauxEnCoursPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VosSignauxEnCoursPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VosSignauxEnCoursPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
