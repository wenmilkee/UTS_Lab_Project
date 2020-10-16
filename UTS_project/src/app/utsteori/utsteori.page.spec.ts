import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UtsteoriPage } from './utsteori.page';

describe('UtsteoriPage', () => {
  let component: UtsteoriPage;
  let fixture: ComponentFixture<UtsteoriPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtsteoriPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UtsteoriPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
