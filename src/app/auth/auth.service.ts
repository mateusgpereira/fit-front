import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { ILoginRequestData, ILoginResponseData } from '../models/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  public performLogin({ email, password }: ILoginRequestData): Observable<ILoginResponseData> {
    return this.httpClient.post<ILoginResponseData>(
      'http://localhost:8080/v1/login',
      { email, password },
      { responseType: 'json' }
    )
  }
}
