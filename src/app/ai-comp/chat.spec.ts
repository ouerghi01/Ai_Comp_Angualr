import { TestBed } from '@angular/core/testing';

import { ChatService } from './chat';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Chat', () => {
  let service: ChatService;

  beforeEach(() => {
     TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [ChatService]
  });
    service = TestBed.inject(ChatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
