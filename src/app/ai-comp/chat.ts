import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { GoogleGenAI } from "@google/genai";
import { environment } from '../../environments/environment';

const genAI = new GoogleGenAI({ apiKey: environment.GOOGLE_GENAI_API_KEY });

export interface AiResponse {
  response: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private apiUrl = `${environment.BACKEND_URL}`; // Adjust the URL as needed

  constructor(private http: HttpClient) {}

  sendMessage(message: string): Observable<AiResponse> {
    const userMessage = { question: message };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<AiResponse>(this.apiUrl, userMessage, { headers }).pipe(
      catchError(err => {
        console.warn('Backend failed, falling back to Gemini...', err);
        return this.fallbackToGemini(message);
      })
    );
  }

  private fallbackToGemini(message: string): Observable<AiResponse> {
    return from(
      genAI.models.generateContent({
        model: "gemini-2.0-flash",
        contents: message,  // use actual message here
      })
    ).pipe(
      map(response => ({
        response: response.text ?? "Sorry, I couldn't generate a response."
      })),
      catchError(err => {
        console.error('Gemini fallback failed:', err);
        return throwError(() => new Error('Both backend and Gemini failed'));
      })
    );
  }
}
