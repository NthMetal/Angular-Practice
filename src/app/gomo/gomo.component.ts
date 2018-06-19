import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gomo',
  templateUrl: './gomo.component.html',
  styleUrls: ['./gomo.component.css']
})
export class GomoComponent implements OnInit {

  public items: number[][];
  public empty: Array<number>;
  public black: Array<number>;
  public white: Array<number>;
  public dim: number;
  
  
  placePiece(a, b) {
    var convertion = a*this.dim + b;
    if(this.items[a][b]==0){
      this.items[a][b] = 1;
      this.black.push(convertion);
      this.empty.splice(this.empty.indexOf(convertion),1);
      console.log(convertion);
    }
    /**
    Convert 2D array x and y into a one dimentional value
    i = x*dim + y
    Convert one dimentional value to 2D array x and y
    x= floor(i/dim) y = i%dim
    */
    
    /**
    AI for placing another piece goes here. Computer = white Player = black
    Check for white 4 in a rows.
    Check for black 4 in a rows.
    Check for white 3 in a rows.
    Check for black 3 in a rows.
    Check for white 2 in a rows.
    Check for black 2 in a rows.
    Place it next to a black piece in a random direction.
    */
    var whiteRand = this.empty[Math.floor(Math.random() * this.empty.length)];
    var whitePlace = whiteRand;
    
    this.white.push(whitePlace);
    this.empty.splice(this.empty.indexOf(whitePlace),1);
    this.items[Math.floor(whitePlace/this.dim)][whitePlace%this.dim] = 2;

  }
  
  constructor() { 
    this.dim = 10;
    this.empty = new Array();
    this.black = new Array();
    this.white = new Array();
    this.items = [];
    for(var i: number = 0; i < this.dim; i++) {
      this.items[i] = [];
      for(var j: number = 0; j< this.dim; j++) {
        var convertion = i*this.dim + j;
        this.items[i][j] = 0;
        this.empty.push(convertion);
      }
    }
  }

  ngOnInit() {
  }

}
