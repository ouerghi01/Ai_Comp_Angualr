// ai-comp.component.ts
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AiResponse, ChatService } from './chat';
import DOMPurify from 'dompurify'; 
interface ChatMessage {
  sender: 'User' | 'AI'; 
  text: string;
}

@Component({
  selector: 'app-ai-comp',
  imports: [FormsModule, CommonModule, HttpClientModule // Add HttpClientModule here
],
  templateUrl: './ai-comp.html',
  styleUrl: './ai-comp.css'
})
export class AiComp implements OnInit{
  isChatVisible = false;
  messages: ChatMessage[] = [];
  message: string = "";
  hydrated = false;
  constructor(private chatService: ChatService,@Inject(PLATFORM_ID) private platformId: Object) { }
  user_sended = false;
  ngAfterViewInit() {
  if (isPlatformBrowser(this.platformId)) {
    this.scrollToBottom();
  }
}
  async ngOnInit(): Promise<void> {
    this.hydrated = true;
    this.messages.push({
      sender: 'AI',
      text: 'Welcome to the AI Chat! How can I assist you today?',
    });
    this.scrollToBottom();
  }

  toggleChat(): void {
    this.isChatVisible = !this.isChatVisible;
  }
 
  
  
  sendMessage(): void {
    if (this.message.trim()) {
      this.user_sended = true;
      const userMessageText = this.message;
      this.messages.push({ sender: 'User', text: userMessageText});
      this.message = ''; 
      this.scrollToBottom();
      this.chatService.sendMessage(userMessageText).subscribe({
        next: async (response: AiResponse) => {
          const aiMarkdown = response.response;
          this.messages.push({
            sender: 'AI',
            text: DOMPurify.sanitize(aiMarkdown), // Sanitize the markdown response
          });
          this.scrollToBottom(); 
          this.user_sended = false;
          console.log(this.user_sended)
        },
        error: (err) => {
          console.error('Failed to get AI response:', err);
          this.messages.push({ sender: 'AI', text: 'Sorry, I am having trouble connecting. Please try again later.' });
          this.scrollToBottom();
        }
      });
    }
  }

  private scrollToBottom(): void {
    if (isPlatformBrowser(this.platformId)) {
      try {
        const messagesContainer = document.querySelector('.ai-comp-messages');
        if (messagesContainer) {
          messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
      } catch (err) {
        console.error('Could not scroll to bottom:', err);
      }
    }
  }
}