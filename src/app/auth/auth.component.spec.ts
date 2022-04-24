import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule } from '@angular/forms'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { provideMockStore } from '@ngrx/store/testing'
import { AuthComponent } from './auth.component'
import { AuthState } from './store/auth.state'

describe('AuthComponent', () => {
  let component: AuthComponent
  let fixture: ComponentFixture<AuthComponent>
  const initialState: AuthState = {
    token: '',
    error: ''
  }

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
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
