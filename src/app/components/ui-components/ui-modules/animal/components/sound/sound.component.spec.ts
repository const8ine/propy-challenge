import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SoundComponent } from './sound.component';

export const SoundComponentTest = () => {
  let component: SoundComponent;
  let fixture: ComponentFixture<SoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a component', () => {
    expect(component).toBeTruthy();
  });
};
