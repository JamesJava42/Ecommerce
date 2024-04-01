// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';
import { Request } from '../request';
import { Response } from '../response'; // Import AuthResponse model

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthserviceService, private router: Router) {}

  login(): void {
    const loginRequest:Request = {
      username: this.username,
      password: this.password
    };
    console.log(loginRequest);
    this.authService.login(loginRequest)
    
      .subscribe(
        
        (authResponse: Response) => { // Adjust the type of authResponse
          console.log('Login successful:', authResponse);
          // Navigate to the main component after successful login
          this.router.navigate(['/home']); // Assuming the main component is HomeComponent
        },
        (error:any) => {
          console.error('Login failed:', error);
        }
      );
  }
}
