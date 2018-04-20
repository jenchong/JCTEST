import { Component, OnInit } from '@angular/core';
import { Joke } from '../joke/joke.component'; 


@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {
  jokes: Joke[];

  constructor() { 
    this.jokes = [
      new Joke ('What did the JENNYCHONG say when looked into the mirror Hahahaha?', `Halloumi (Hello Me X0 XO)`), 
      new Joke ('What kind of cheese do you use to disguise a small horse?', 'Mask-a-pony (Mascarpone)'),
      new Joke ('A kid threw a lump of xxxcheddar at me','I thought \'That\'s not very mature but is really hilarious .\''),
    ];
  }

  ngOnInit() {
  }

}
   