import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlService } from './url.service';
import { Observable } from 'rxjs/Observable';
import { Review } from '../models/review';

@Injectable()
export class ReviewService {
  add_commennt_url=this.urlService.add_commennt_url;
  constructor(private httpClient:HttpClient,private urlService:UrlService) { }

  addComment(comment):Observable<Review>{
    return this.httpClient.post<Review>(this.add_commennt_url,comment);
  
  }


}
