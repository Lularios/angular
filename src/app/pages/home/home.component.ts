import { Component } from '@angular/core';
import { JokesService } from '../../jokes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  jokes
  constructor(private js:JokesService){
    this.jokes = this.js.getJokes();
    console.log(this.jokes)
  }
}
