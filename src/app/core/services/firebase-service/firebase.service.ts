import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AngularFirestore} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(
    private http: HttpClient,
    private firestore: AngularFirestore,
    ) {
  }

  public getAnimalsList(): Observable<any> {
    return this.firestore.collection("animals").get();
  }
}
