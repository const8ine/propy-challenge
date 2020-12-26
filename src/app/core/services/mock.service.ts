import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockService {
  constructor(private http: HttpClient) {
  }

  public getMockAnimalsList(): Observable<any> {
    return this.http.get("assets/data/animals.mock.json");
  }
}
