import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AnimalInterface } from "../../models/animal.interface";

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private settingsList: AnimalInterface[] = [
    {name: "goat", sound: "baa"},
    {name: "cat", sound: "meow"},
    {name: "goose", sound: "honk"}
  ];

  constructor() {
  }

  public getSettingsList(): Observable<AnimalInterface[]> {
    return of(this.settingsList);
  }

  public setSettingsList(data: AnimalInterface[]): void {
    this.settingsList = data;
  }
}
