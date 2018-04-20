import { Component } from '@angular/core'; 
import { Joke } from './joke.component';

@Component({
        selector: 'jokelist',
        template: `
        <joke *ngFor="let j of jokes" [joke]="j"></joke>        
    `
    })
        
export class JokeListComponent {
    jokes: Joke[];
    
    constructor() {
        this.jokes = [
            new Joke ('What did the cheese say when looked into the mirror Hahahaha?', `Halloumi (Hello Me X0 XO)`), 
            new Joke ('What kind of cheese do you use to disguise a small horse?', 'Mask-a-pony (Mascarpone)'),
            new Joke ('A kid threw a lump of xxxcheddar at me','I thought \'That\'s not very mature but is really hilarious .\''),
    ];
    }
}

   
