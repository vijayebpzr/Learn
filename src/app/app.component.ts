import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/auth-service.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit {

  isLoggedIn=false;
  constructor(private authService:AuthService
  ) {

    this.authService.loginChanged.subscribe(loggedIn=>{
      this.isLoggedIn=loggedIn;
    })
  }

  language: any;

  ngOnInit() {

    this.language=localStorage.getItem("language");

    if(!this.language)
    {
      this.language="english";
    }

   
    this.authService.isLoggedin().then(loggedIn=>
      {
        this.isLoggedIn=loggedIn;
        
      })
  }

  login(){
    console.log(this.language);
    localStorage.setItem("language","Spanish");
    this.authService.login("Spanish");
  }

  logout(){
    localStorage.removeItem("language");
    this.authService.logout();
  }
}
