import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FirebaseApiService } from "./firebase-api.service";
import { AngularFirestore } from '@angular/fire/firestore';


describe('firebaseApiServiceTest', () => {
  let angularFirestoreSpy: { get: jasmine.Spy };

  beforeEach(async () => {
    angularFirestoreSpy = jasmine.createSpyObj('AngularFirestore', ['collection'], ['"animals"']);

    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        {provide: AngularFirestore, useValue: angularFirestoreSpy},
        FirebaseApiService,
      ]
    });
  });

  it('should be created', () => {
    const service: FirebaseApiService = TestBed.get(FirebaseApiService);
    expect(service).toBeTruthy();
  });

  it('should have getData function', () => {
    const service: FirebaseApiService = TestBed.get(FirebaseApiService);
    expect(service.getAnimalsList).toBeTruthy();
  });

});
