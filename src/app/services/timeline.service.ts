import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class TimelineService {
  public repoURL = 'https://api.github.com/repos/joaucar/Website/commits';
  constructor(private http: HttpClient) {}
  getInfo() {
    return this.http.get(this.repoURL, httpOptions);
  }
}
