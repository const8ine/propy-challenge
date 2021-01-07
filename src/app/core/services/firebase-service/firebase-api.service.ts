import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AngularFirestore} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class FirebaseApiService {
  constructor(
    private http: HttpClient,
    private angularFirestore: AngularFirestore,
    ) {
  }

  public getAnimalsList(): Observable<any> {
    return this.angularFirestore.collection("animals").get();
  }
}
