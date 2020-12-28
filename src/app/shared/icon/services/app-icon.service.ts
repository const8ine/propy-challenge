import { Injectable } from '@angular/core';
import { icons } from '../core/icon-map';

@Injectable()
export class IconService {

  resolveIconSrc(iconName: string) {
    if (!icons[iconName]) {
      console.warn(`Unknown icon: ${iconName}!`);
    }

    return `${icons[iconName]}#${iconName}`;
  }
}
