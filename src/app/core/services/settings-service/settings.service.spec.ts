import { AnimalInterface } from "../../models/animal.interface";
import { SettingsService } from './settings.service';

describe('SettingsService', () => {
  let settingsService;
  let mockJSON: AnimalInterface[];

  beforeEach(async () => {
    mockJSON = [
      {name: "goat", sound: "baa"},
      {name: "cat", sound: "meow"},
      {name: "goose", sound: "honk"}
    ];

    settingsService = new SettingsService;
  });

  it('getAnimalsList method should return value from observable',
    (done: DoneFn) => {
      settingsService.getSettingsList().subscribe((animals) => {
        expect(animals).toEqual(mockJSON);
        done();
      });
    });
});

