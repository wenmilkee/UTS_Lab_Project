import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddbarangPage } from './addbarang.page';

describe('AddbarangPage', () => {
  let component: AddbarangPage;
  let fixture: ComponentFixture<AddbarangPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbarangPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddbarangPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
