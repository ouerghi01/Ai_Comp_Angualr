import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AiComp } from "./ai-comp/ai-comp";
import { HttpClientModule } from '@angular/common/http';
import { initFlowbite } from "flowbite";
import { isPlatformBrowser } from "@angular/common";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AiComp,HttpClientModule ,],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'comp_ai';
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      initFlowbite();
    }
  }
}
