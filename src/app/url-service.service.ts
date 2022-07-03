import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlServiceService {
  url = 'https://api.shrtco.de/v2/'
  constructor(private http: HttpClient) { }

  getShortenUrl(data: any) {
    return this.http.get(this.url + '/shorten?url=' + data);
  }
}
