import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string | undefined;
  successMessage: string | undefined;

  constructor(private router: Router) { }

  onSubmit() {
    // Check if the username and password are correct (for demo purposes)
    if (this.username === 'meghana123' && this.password === 'reddy123') {
      this.successMessage = 'Login Successful!'
      // Login successful
      console.log('Authentication successful');
      // Redirect to student-details page
      this.router.navigateByUrl("/students");
      
    } else {
      // Invalid username or password

      this.errorMessage = 'Invalid username or password';
    }
  }
}
