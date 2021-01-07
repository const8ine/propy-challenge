import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a component', () => {
    expect(component).toBeTruthy();
  });

  it('should create a button with text content inside, when type is "regular"', async(() => {
    component.buttonType = 'regular';
    component.text = "Example text";
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('button')).toBeTruthy();
    expect(compiled.querySelector('button').textContent).toBeTruthy();

    component.buttonType = 'icon';
    fixture.detectChanges();
    !expect(compiled.querySelector('.button__icon-container')).toBeNull();
  }));

  it('should create a button with a content wrapper, when type is "icon"', async(() => {
    component.buttonType = 'icon';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    !expect(compiled.querySelector('.button__icon-container')).toBeNull();
  }));
});
