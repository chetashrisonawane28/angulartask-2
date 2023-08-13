import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.css']
})
export class ChooseComponent implements OnInit{
  contactForm : any;
  options : any = "Choose Option";
  constructor(private router : Router){}
  ngOnInit(): void {
  }
  Phone(){
    this.options = "Phone";
  }
  Email(){
    this.options = "Email"
  }
}

