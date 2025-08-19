import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, switchMap } from 'rxjs';
import { Schema } from '../interfaces/schema';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private loginUrl = 'https://dev.lsbonus.com/user/login';
  private schemaUrl = 'https://dev.lsbonus.com/schema/test';

  private sid: string | null = null;

  constructor(private http: HttpClient) {}

  login(): Observable<any> {
    return this.http.post(this.loginUrl, {
      login: 'candidate',
      password: '35pMu4B1WtbS'
    });
  }

  getSchema(): Observable<Schema> {
    if (!this.sid) {
      return this.login().pipe(
        switchMap((res: any) => {
          this.sid = res.sid;
          return this.fetchSchema();
        })
      );
    }
    return this.fetchSchema();
  }

  private fetchSchema(): Observable<Schema> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.sid}`
    });
    return this.http.post<Schema>(this.schemaUrl, {}, { headers });
  }

  private getMockData(): Observable<Schema> {
    return of({
      name: "test_div",
      text: "Test component",
      color: "orange",
      elements: [
        { name: "input1", text: "Test Text Input", type: "text" },
        { name: "input2", text: "Test Number Input", type: "number" }
      ]
    });
  }
}