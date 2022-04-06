import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecapitulatifDuSignalementPage } from './recapitulatif-du-signalement.page';

describe('RecapitulatifDuSignalementPage', () => {
  let component: RecapitulatifDuSignalementPage;
  let fixture: ComponentFixture<RecapitulatifDuSignalementPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RecapitulatifDuSignalementPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecapitulatifDuSignalementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
