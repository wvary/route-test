import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit() {
    console.log(">>> router", this.router)
    console.log(">>> activatedRoute", this.activatedRoute)

    if (this.activatedRoute.queryParams['value'].param === 'value') {
      console.log(">>> redirecting")
      this.router.navigate(['home']);
    }
  }
}