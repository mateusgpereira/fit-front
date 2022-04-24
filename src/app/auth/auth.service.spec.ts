import { TestBed } from '@angular/core/testing'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

import { AuthService } from './auth.service'
import { ILoginRequestData, ILoginResponseData } from '../models/auth'

describe('AuthService', () => {
  let service: AuthService
  let httpMock: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] })
    service = TestBed.inject(AuthService)
    httpMock = TestBed.inject(HttpTestingController)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should sucessfully dispatch the POST perform login request', () => {
    const requestData: ILoginRequestData = {
      email: 'mateus@test.com',
      password: 'securepass'
    }

    const expected: ILoginResponseData = { token: 'token' }

    service.performLogin(requestData).subscribe((response) => {
      expect(response).toBe(expected)
    })

    const mockRequest = httpMock.expectOne('http://localhost:8080/v1/login')
    expect(mockRequest.request.body).toEqual(requestData)
    expect(mockRequest.request.method).toBe('POST')
    mockRequest.flush(expected)
  })
})
