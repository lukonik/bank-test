import { Injectable } from '@angular/core';

const USERNAME_VALUE = 'admin';
const PASSWORD_VALUE = 'admin123';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  login(username: string, password: string) {
    if (username === USERNAME_VALUE && password === PASSWORD_VALUE) {
      return true;
    }

    return false;
  }
}
