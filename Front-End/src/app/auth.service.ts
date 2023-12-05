import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isLoggedIn = false;

  constructor() { }

  login(email: string, password: string): boolean {
    // Placeholder logic for logging in
    // In a real scenario, you'd call an API to validate credentials
    if (email === 'test@example.com' && password === 'password') {
      this._isLoggedIn = true;
    }
    return this._isLoggedIn;
  }

  isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  logout(): void {
    this._isLoggedIn = false;
  }
}
