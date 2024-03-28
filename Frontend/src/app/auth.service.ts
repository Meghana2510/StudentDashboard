import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticate(username: string, password: string) {
    throw new Error('Method not implemented.');
  }
  constructor() { }

  // Implement your authentication logic here
  login(username: string, password: string): boolean {
    // For demo purposes, checking if the username is 'admin' and password is 'password'
    return username === 'admin' && password === 'password';
  }
}
