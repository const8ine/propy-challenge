import {NameComponentTest} from "./components/name/name.component.spec";
import {SoundComponentTest} from "./components/sound/sound.component.spec";

export const animalModuleTest = () => {
  describe('NameComponent', () => NameComponentTest());
  describe('SoundComponent', () => SoundComponentTest());
};
