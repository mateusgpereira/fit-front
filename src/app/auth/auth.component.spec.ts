import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule } from '@angular/forms'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { MockStore, provideMockStore } from '@ngrx/store/testing'
import { AuthComponent } from './auth.component'
import { AuthState } from './store/auth.state'

describe('AuthComponent', () => {
  let component: AuthComponent
  let fixture: ComponentFixture<AuthComponent>
  const initialState: AuthState = {
    token: '',
    error: ''
  }
  let store: MockStore

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthComponent],
      providers: [provideMockStore({ initialState })],
      imports: [FormsModule, FontAwesomeModule]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
    store = TestBed.inject(MockStore)
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should dispatch performLogin when onLoginSubmit is called', () => {
    jest.spyOn(store, 'dispatch').mockImplementation()

    component.onLoginSubmit()

    expect(store.dispatch).toBeCalledTimes(1)
    expect(store.dispatch).toBeCalledWith({
      email: '',
      password: '',
      type: '[AUTH] Perform Login request to api'
    })
  })
})
