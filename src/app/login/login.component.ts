import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {
  AuthService,
  GoogleLoginProvider
} from 'angular-6-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  // @Input()
  // email: string;
  // password: string;

  constructor(private router: Router, private socialAuthService: AuthService) { }

  ngOnInit() {}
  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if (socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }

  this.socialAuthService.signIn(socialPlatformProvider).then(
    (userData) => {
      console.log(socialPlatform+" sign in data : " , userData);
      // sign-in with userData
    }
  );
}

onSignIn = (googleUser) => {
  const profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}

  // login() {
  //   if(this.email === 'hpotter@gmail.com' && this.password === 'password') {
  //     this.router.navigate(['user']);
  //   } else {
  //     alert('invalid email or password');
  //   }
  // }
}
