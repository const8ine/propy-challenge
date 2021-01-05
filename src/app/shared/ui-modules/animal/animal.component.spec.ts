import {NameComponentTest} from "./components/name/name.component.spec";
import {SoundComponentTest} from "./components/sound/sound.component.spec";

describe('animalModuleTest', () => {
  describe('NameComponent', () => NameComponentTest());
  describe('SoundComponent', () => SoundComponentTest());
});
