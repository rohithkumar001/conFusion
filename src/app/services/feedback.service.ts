import { Injectable } from '@angular/core';
import { Feedback, ContactType } from '../shared/feedback';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { catchError } from 'rxjs/operators';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private processHttpMsgService: ProcessHTTPMsgService,
    private http: HttpClient) { }

  submitFeedback(feedback: Feedback): Observable<Feedback>  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<Feedback>(baseURL + "feedback", feedback, httpOptions)
      .pipe(catchError(this.processHttpMsgService.handleError));
  }
}
