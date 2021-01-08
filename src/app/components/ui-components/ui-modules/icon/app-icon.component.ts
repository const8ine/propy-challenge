import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IconService } from './services/app-icon.service';
import { IconSizeEnum, IconSizeEnumType } from './core/icon-size.enum';
import { IconStyles } from './core/icon-styles.interface';

@Component({
  selector: 'app-icon',
  templateUrl: './app-icon.component.html',
  styleUrls: ['./app-icon.component.scss']
})
export class IconComponent implements OnChanges {

  @Input()
  set icon(value: string) {
    this.iconSrc = this.iconService.resolveIconSrc(value);
  }
  iconSrc: string;

  @Input()
  staticSrc = '';

  @Input()
  size: IconSizeEnumType = IconSizeEnum.small;

  @Input()
  rotateDeg = 0;

  @Input()
  customWidth = '';

  @Input()
  customHeight = '';

  SizeEnum = IconSizeEnum;
  customStyles: IconStyles = {};

  private styles: IconStyles = {};

  constructor(private iconService: IconService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (!!changes['customWidth']) {
      this.styles.width = changes['customWidth'].currentValue;
    }

    if (!!changes['customHeight']) {
      this.styles.height = changes['customHeight'].currentValue;
    }

    if (!!changes['rotateDeg']) {
      this.styles.transform = `rotate(${changes['rotateDeg'].currentValue}deg)`;
    }

    this.updateStyles();
  }

  private updateStyles() {
    if (this.size === IconSizeEnum.custom) {
      this.customStyles = this.styles;
    } else {
      this.customStyles = {
        transform: this.styles.transform
      };
    }
  }
}
