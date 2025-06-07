// src/app/chat.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export interface UserMessage {
  text: string;
}

export interface AiResponse {
  response: string;
}

@Injectable({
  providedIn: 'root' 
})
export class ChatService {
  private apiUrl = environment.apiUrl // Ensure this URL is set in your environment

  constructor(private http: HttpClient) { }

  /**
   * Sends a user message to the backend and receives an AI response.
   * @param message The user's message text.
   * @returns An Observable of the AI response.
   */
  sendMessage(message: string): Observable<AiResponse> {
    const userMessage = { question: message };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<AiResponse>(this.apiUrl, userMessage, { headers }).pipe(
      map(response => response),
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred in ChatService:', error);
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }
}