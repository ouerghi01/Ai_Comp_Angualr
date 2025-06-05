import { Component } from '@angular/core';

@Component({
  selector: 'app-ai-comp',
  imports: [],
  templateUrl: './ai-comp.html',
  styleUrl: './ai-comp.css'
})
export class AiComp {
isChatVisible = false;

  toggleChat(): void {
    console.log('Toggling chat visibility');
    this.isChatVisible = !this.isChatVisible;
  }
}
