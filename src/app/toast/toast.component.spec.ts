import { ComponentFixture, fakeAsync, flush, TestBed } from '@angular/core/testing'

import { ToastComponent } from './toast.component'
import { ToastService } from './toast.service'

describe('ToastComponent', () => {
  let component: ToastComponent
  let fixture: ComponentFixture<ToastComponent>
  let toastService: ToastService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToastComponent],
      providers: [ToastService]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
    toastService = TestBed.inject(ToastService)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should subscribe on toast service and populate toast properties', fakeAsync(() => {
    toastService.toast.next({ message: 'MESSAGE', show: true, type: 'success' })

    flush()

    expect(component.message).toBe('MESSAGE')
    expect(component.show).toBe(true)
    expect(component.type).toBe('success')
  }))

  it('should call toast hide on onCloseClick', () => {
    jest.spyOn(toastService, 'hide').mockImplementation()

    component.onCloseClick()

    expect(toastService.hide).toBeCalled()
  })
})
