
import { Component, Input } from '@angular/core'; 

@Component({
        selector: 'joke',
        template: `
        <div class="card mb-5" style="width: 320px;">
        <div class="card-body">
        <h4 class="card-title">
            {{joke.setup}}
        </h4>
        <p class="card-text" [hidden]="joke.hide">
            {{joke.punchline}}
        </p> 
        </div>
        <button class="btn btn-primary" (click)="joke.toggle()" role="button"> Tell me</button>       
        </div>
    `
    })
        
export class JokeComponent {
    @Input() joke:Object;
    //setup: string;
    //punchline: string;

    //constructor() {
    //    this.setup = `What did the cheese say when looked into the mirror?`;
    //    this.punchline = `Halloumi (Hello Me X0 XO`;
    }
}

export class Joke {
    public setup: string;
    public punchline: string;
    public hide: boolean;

    constructor(setup: string, punchline: string) {
        this.setup = setup;
        this.punchline = punchline;
        this.hide = true;
    }

    toggle() {
        this.hide = !this.hide;
    }
}