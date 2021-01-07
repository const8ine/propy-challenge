import {FirebaseApiService} from "./firebase-api.service";
import {environment} from "../../../../environments/environment";
import {AnimalInterface} from "../../models/animal.interface";

describe('FirebaseApiService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let angularFirestoreSpy: { get: jasmine.Spy };
  let firebaseApiService: FirebaseApiService;
  let mockJsonUrl: AnimalInterface[];
  let animalsList: AnimalInterface[] = [];

  beforeEach(async () => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    angularFirestoreSpy = jasmine.createSpyObj('AngularFirestore', ['collection'], ['"animals"']);
    mockJsonUrl = httpClientSpy.get(environment.mockUrl);

    firebaseApiService = new FirebaseApiService(
      httpClientSpy as any,
      angularFirestoreSpy as any,
    );
  });

  it('getAnimalsList method should return value from observable',
    (done: DoneFn) => {
      firebaseApiService.getAnimalsList().subscribe((animals) => {
        animals.docs.forEach((doc) => {
          animalsList.push(doc.data());
        });
      });

      expect(animalsList).toBe(mockJsonUrl);
      done();
    });
});

