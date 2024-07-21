import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Sheet } from '../models/sheet.model';

@Injectable({
  providedIn: 'root'
})
export class SheetService {

  // private apiUrl = 'https://script.google.com/macros/s/AKfycbyUSWxnIBSoWVY4b_ix_YQHFNNSRAecTDA2CD3wUQ4Vy3fZTyQ8MSDv4qLNaSPJbHkJ/exec'; 
  private apiUrl = 'https://5iv3w7x7amqxz5atfriupzcduy0djhnx.lambda-url.us-east-1.on.aws/createUser';


  constructor(private http: HttpClient) { }

  // createSheet(fullname: string, email: string, mobile: string, timeZone: string, courseName: string): Observable<any> {
  //   const formData = { fullname, email, mobile, timeZone, courseName };
  //   return this.http.post<any>(this.apiUrl, formData);
  // }

  createUser(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, data, { headers: headers });
  }
}
