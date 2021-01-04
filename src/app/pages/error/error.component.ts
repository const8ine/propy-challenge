import {
  Component,
} from '@angular/core';

@Component({
  selector: 'app-error-page',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})

export class ErrorComponent {
  public imageUrl = '/assets/images/icons/emoji-frontend-engineer.png'

  constructor(
  ) {
  }
}
