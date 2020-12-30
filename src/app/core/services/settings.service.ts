import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {AnimalInterface} from "../models/animal.interface";

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private settingsList: BehaviorSubject<AnimalInterface[]> = new BehaviorSubject<AnimalInterface[]>([]);
  constructor() {
  }

  public getSettingsList(): Observable<AnimalInterface[]> {
    return this.settingsList;
  }

  public setSettingsList(data: AnimalInterface[]): void {
    this.settingsList.next(data);
    console.log('set has changed: ', this.settingsList);
  }
}
