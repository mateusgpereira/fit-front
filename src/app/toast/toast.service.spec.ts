import { fakeAsync, TestBed, tick } from '@angular/core/testing'

import { ToastService } from './toast.service'
import { ToastModel } from './types'

describe('ToastService', () => {
  let service: ToastService
  let toastNextSpy: jest.SpyInstance

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(ToastService)
    toastNextSpy = jest.spyOn(service.toast, 'next').mockImplementation()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should show toast success message', () => {
    const expected: ToastModel = {
      message: 'MESSAGE',
      type: 'success',
      show: true
    }

    service.showToast('MESSAGE', 'success')

    expect(toastNextSpy).toBeCalledTimes(1)
    expect(toastNextSpy).toBeCalledWith(expected)
  })

  it('should show toast error message with timeout of 3000ms', fakeAsync(() => {
    const expected: ToastModel = {
      message: 'MESSAGE',
      type: 'error',
      show: true
    }

    jest.spyOn(service, 'hide').mockImplementationOnce(() => {})

    service.showToastWithTimeout('MESSAGE', 'error', 3000)

    tick(3001)

    expect(toastNextSpy).toBeCalledTimes(1)
    expect(toastNextSpy).toBeCalledWith(expected)
    expect(service.hide).toBeCalledTimes(1)
  }))

  it('should hide toast message', () => {
    service.hide()

    expect(toastNextSpy).toBeCalledTimes(1)
    expect(toastNextSpy).toBeCalledWith({
      message: '',
      type: '',
      show: false
    })
  })
})
