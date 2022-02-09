import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { User } from '../../../../core/models/user';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: "app-auth-card",
  templateUrl: 'auth-card.component.html',
  styleUrls: ["./auth-card.component.scss"],
})
export class AuthCardComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    // redirect to home if already logged in
    // if (this.authenticationService.userValue) {
    //     this.router.navigate(['/']);
    // }
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService
      .login(this.f.value.email, this.f.value.password)
      .pipe(first())
      .subscribe({
        next: (res: User) => {
          if (res.role && res.role === 'Admin')
            this.router.navigate(['/admin']);
          else if (res.role && res.role === 'Manager')
            this.router.navigate(['/manager']);
          else if (res.role && res.role === 'User')
            this.router.navigate(['/user', res.id]);
          else this.router.navigate(['/login']);
        },
        error: (error) => {
          this.error = error;
          this.loading = false;
          console.log(this.error);
        },
      });
  }
  logout() {
    this.authenticationService.logout();
  }
}
