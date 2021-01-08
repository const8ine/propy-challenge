import {ComponentFixture, TestBed} from '@angular/core/testing';
import { NameComponent } from './name.component';
import { IconComponent } from 'src/app/components/ui-components/ui-modules/icon/app-icon.component';
import {IconService} from "src/app/components/ui-components/ui-modules/icon/services/app-icon.service";

export const NameComponentTest = () => {
  let component: NameComponent;
  let fixture: ComponentFixture<NameComponent>;
  const animalName = 'goat';
  const matchingIconUrl = 'assets/images/icons/emoji-goat.png';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        IconComponent,
        NameComponent
      ], providers: [
        IconService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NameComponent);
    component = fixture.componentInstance;
    component.name = animalName;
    fixture.detectChanges();
  });

  it('should create a component', () => {
    expect(component).toBeTruthy();
  });

  it('should display an icon',() => {
    const compiled = fixture.debugElement.nativeElement;

    !expect(compiled.querySelector('img[src="' + matchingIconUrl + '"]')).toBeTruthy();
  });

  it('should display text', () => {
    const compiled = fixture.debugElement.nativeElement;

    !expect(compiled.querySelector('.name__text').childNodes[0].nodeValue).toMatch(animalName);
  });
};
