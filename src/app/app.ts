import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AiComp } from "./ai-comp/ai-comp";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AiComp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'comp_ai';
}
