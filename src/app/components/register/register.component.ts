import { Component, OnInit } from '@angular/core';
import {HttpHeaders,  HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  email: any;
  password: any;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    const header = new HttpHeaders({'Access-Control-Allow-Origin': '*'});
    this.http.post('http://localhost:3000/addUser', {email: this.email, password: this.password}, {headers: header}).subscribe((res) => {
        console.log('added successfully', res);
        this.router.navigate(['/login']);
    });
  }

}
