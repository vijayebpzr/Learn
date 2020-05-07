import { Component, OnInit } from '@angular/core';
import { AuthService } from './../core/auth-service.component';
import { Router } from '@angular/router';

@Component({
    selector: 'selector-name',
    template: `<div></div>`
})

export class SigninRedirectComponent implements OnInit {
    constructor(private authService:AuthService,
        private router:Router) { }

    ngOnInit() { 
        this.authService.completeLogin().then(user=>{
            this.router.navigate(['/'],{replaceUrl:true});
        })
    }
}