import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component, EventEmitter,
  OnDestroy, OnInit, Output,
} from '@angular/core';
import {Subject} from 'rxjs';
import {AnimalInterface} from "../../core/models/animal.interface";
import {MockService} from "../../core/services/mock.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {SettingsService} from "../../core/services/settings.service";

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
  public isFormSaved: boolean;
  @Output() reloadButton: EventEmitter<any> = new EventEmitter<any>();
  private ngUnsubscribe = new Subject();

  constructor(
    private readonly mockService: MockService,
    private readonly cdRef: ChangeDetectorRef,
    private settingsService: SettingsService,
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

  private httpGetAnimalsList(): void {
    this.mockService.getMockAnimalsList().subscribe((animals) => {
      this.animalsList = animals;
      this.cdRef.markForCheck();
    }, error => this.mockResponseError = true);
  }

  // Put values into values list. It may be longer than 3 items.
  public setValues(): void {
    this.animalsSet = this.animalsSelectForm.value;
    this.isFormSaved = false;
    console.log('setValue ', this.isFormSaved);
  }

  // Submit values only if there are no more and no less than 3 items.
  public onSubmit(): void {
    this.settingsService.setSettingsList(this.animalsSet);
    this.isFormSaved = true;
    console.log('onSubmit ', this.isFormSaved);
  }
}
