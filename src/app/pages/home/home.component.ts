import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter, OnDestroy, OnInit, Output,
} from '@angular/core';
import {Subject} from 'rxjs';
import {AnimalInterface} from "../../core/models/animal.interface";
import {MockService} from "../../core/services/mock.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HomeComponent implements OnInit, OnDestroy {
  public animalsList: AnimalInterface[];
  public mockResponseError: boolean;
  @Output() dataSourceUpdate: EventEmitter<AnimalInterface[]> = new EventEmitter<AnimalInterface[]>();
  private ngUnsubscribe = new Subject();

  constructor(
    private readonly mockService: MockService,
    private readonly cdRef: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this.httpGetAnimalsList();
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  public httpGetAnimalsList(): void {
    this.mockService.getMockAnimalsList().subscribe((animals) => {
      this.animalsList = animals;
      this.cdRef.markForCheck();
    }, error => this.mockResponseError = true);
  }
}
