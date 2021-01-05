import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NameComponent } from './name.component';

export const NameComponentTest = () => {
  let component: NameComponent;
  let fixture: ComponentFixture<NameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a component', () => {
    expect(component).toBeTruthy();
  });
};
