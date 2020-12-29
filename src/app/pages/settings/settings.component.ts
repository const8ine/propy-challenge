import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy, OnInit,
} from '@angular/core';
import {Subject} from 'rxjs';
import {AnimalInterface} from "../../core/models/animal.interface";
import {MockService} from "../../core/services/mock.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

// Imagine we have a component with PrimeNG legacy ;)

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsComponent implements OnInit, OnDestroy {
  public animalsList: AnimalInterface[];
  public animalsSet = [
    {name: "goat", sound: "baa"},
    {name: "cat", sound: "meow"},
    {name: "goose", sound: "honk"}
  ];
  public mockResponseError: boolean;
  public animalsSelectForm: FormGroup;
  private ngUnsubscribe = new Subject();

  constructor(
    private readonly mockService: MockService,
    private readonly cdRef: ChangeDetectorRef,
    private formBuilder: FormBuilder,
  ) {
    this.animalsSelectForm = this.formBuilder.group({
      'animals-select': new FormControl(
        this.animalsSet,
        [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(3)
        ]
      ),
    });
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

  public onSubmit(animalsData): void {
    console.warn('Data has been submitted: ', animalsData);
  }

  public setValues(): void {
    this.animalsSet = this.animalsSelectForm.value;
  }
}
