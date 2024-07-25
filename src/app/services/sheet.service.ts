import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SheetService {

  // private apiUrl = 'https://script.google.com/macros/s/AKfycbyUSWxnIBSoWVY4b_ix_YQHFNNSRAecTDA2CD3wUQ4Vy3fZTyQ8MSDv4qLNaSPJbHkJ/exec'; 
  // private apiUrl = 'https://5iv3w7x7amqxz5atfriupzcduy0djhnx.lambda-url.us-east-1.on.aws/createUser';
  private apiUrl = environment.apiUrl;



  constructor(private http: HttpClient) { }


  createUser(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, data, { headers: headers });
  }
}
