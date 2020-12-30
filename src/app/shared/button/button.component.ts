import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {
  public btnText: string;
  @Input() isDisabled: boolean;
  @Input() nativeType: string;
  @Input() set text(_text: string) {
    this.btnText = _text;
    this.cdRef.markForCheck();
  }

  constructor(
    private readonly cdRef: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
  }
}
