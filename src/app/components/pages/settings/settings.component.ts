import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component, EventEmitter,
  OnDestroy, OnInit, Output,
} from '@angular/core';
import { Subject } from 'rxjs';
import { AnimalInterface } from "../../../core/models/animal.interface";
import { MockApiService } from "../../../core/services/mock-service/mock-api.service";
import { FirebaseApiService } from "../../../core/services/firebase-service/firebase-api.service";
import { SettingsService } from "../../../core/services/settings-service/settings.service";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

// Imagine we have a component with PrimeNG legacy ;)

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsComponent implements OnInit, OnDestroy {
  public animalsList: AnimalInterface[] = [];
  public animalsSet: AnimalInterface[];
  public isNoItemsError: boolean;
  public animalsSelectForm: FormGroup;
  public isFormSaved: boolean;
  @Output() reloadButton: EventEmitter<any> = new EventEmitter<any>();
  private ngUnsubscribe = new Subject();

  constructor(
    private readonly mockService: MockApiService,
    private firebaseService: FirebaseApiService,
    private readonly cdRef: ChangeDetectorRef,
    private settingsService: SettingsService,
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    // this.httpGetMockAnimalsList();
    this.httpGetAnimalsList();
    this.getAnimalsSettingsList();
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  // A method used for local testing to mock response from server
  private httpGetMockAnimalsList(): void {
    this.mockService.getMockAnimalsList().subscribe((animals) => {
      this.animalsList = animals;
      this.initForm();
      this.cdRef.markForCheck();
    }, error => this.isNoItemsError = true);
  }

  private httpGetAnimalsList(): void {
    this.firebaseService.getAnimalsList().subscribe((animals) => {
      animals.docs.forEach((doc) => {
        this.animalsList.push(doc.data());
      });
      this.initForm();
      this.cdRef.markForCheck();
    }, error => this.isNoItemsError = true);
  }

  private getAnimalsSettingsList(): void {
    this.settingsService.getSettingsList().subscribe((animals) => {
      this.animalsSet = animals;
      this.cdRef.markForCheck();
    });
  }

  private initForm(): void {
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

  // Put values into values list. It may be longer than 3 items.
  public setValues(): void {
    this.animalsSet = this.animalsSelectForm.value;
    this.isFormSaved = false;
  }

  // Submit values only if there are no more and no less than 3 items.
  // the values are inside an object, that has the same name than form control.
  // Here it called 'animals-select'. If user selected any value, it will be
  // created. Otherwise it will stay undefined.
  public onSubmit(): void {
    if (this.animalsSet['animals-select']) {
      this.settingsService.setSettingsList(this.animalsSet['animals-select']);
      this.isFormSaved = true;
    }
  }
}
