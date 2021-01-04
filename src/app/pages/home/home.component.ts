import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter, OnDestroy, OnInit, Output,
} from '@angular/core';
import {Subject} from 'rxjs';
import {AnimalInterface} from "../../core/models/animal.interface";
import {SettingsService} from "../../core/services/settings-service/settings.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HomeComponent implements OnInit, OnDestroy {
  public animalsSet: AnimalInterface[];
  public error: boolean;
  @Output() dataSourceUpdate: EventEmitter<AnimalInterface[]> = new EventEmitter<AnimalInterface[]>();
  private ngUnsubscribe = new Subject();

  constructor(
    private settingsService: SettingsService,
    private readonly cdRef: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this.getAnimalsList();
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  private getAnimalsList(): void {
    this.settingsService.getSettingsList().subscribe((animals) => {
      console.log(animals);
      this.animalsSet = animals;
      console.log(this.animalsSet);
      this.cdRef.markForCheck();
    }, error => this.error = true);
  }
}
