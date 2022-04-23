import { ILoginRequestData } from './auth'

export class User implements ILoginRequestData {
  constructor(public email: string, public password: string) {}
}
