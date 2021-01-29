import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GetstardedPage } from './getstarded.page';

describe('GetstardedPage', () => {
  let component: GetstardedPage;
  let fixture: ComponentFixture<GetstardedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetstardedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GetstardedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
