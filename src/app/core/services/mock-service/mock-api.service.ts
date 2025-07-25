import { Injectable } from '@angular/core';
import { environment } from "../../../../environments/environment";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockApiService {
  constructor(private http: HttpClient) {
  }

  public getMockAnimalsList(): Observable<any> {
    return this.http.get(environment.mockJsonUrl);
  }
}
