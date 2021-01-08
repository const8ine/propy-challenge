import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit
} from '@angular/core';
import {ButtonTypesEnum, ButtonTypesEnumType} from "./core/button-types.enum";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {
  public btnText: string;
  public btnType: ButtonTypesEnum;
  public BUTTON_TYPES = ButtonTypesEnum;
  @Input() isDisabled: boolean;
  @Input() nativeType: string;
  @Input() set text(_text: string) {
    this.btnText = _text;
    this.cdRef.markForCheck();
  }
  @Input()
  set buttonType(type: ButtonTypesEnumType) {
    this.btnType = type as ButtonTypesEnum;
  }

  constructor(
    private readonly cdRef: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
  }
}
