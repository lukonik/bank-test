import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  username = '';

  password = '';

  showErrorMessage = false;

  loading = false;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    if (this.loading) {
      return;
    }

    this.loading = true;

    setTimeout(() => {
      const isAuthorized = this.userService.login(this.username, this.password);
      this.loading = false;

      this.showErrorMessage = false;

      if (isAuthorized) {
        this.router.navigate(['dashboard']);
      } else {
        this.showErrorMessage = true;
      }
    }, 2000);
  }
}
