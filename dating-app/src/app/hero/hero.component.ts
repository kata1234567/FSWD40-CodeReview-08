import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
private heroHeading: string;
private heroText: string;
private heroBtnText: string;
private heroBtnUrl: string;
  constructor() { 
  	this.heroHeading = "Welcome to coders dating.";
  	this.heroText = "Take your chance and find your true love.";
  	this.heroBtnText = "Let´s go";
  

  }

  ngOnInit() {
  }

}
