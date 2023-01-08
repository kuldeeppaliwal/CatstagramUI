import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Cat } from '../Models/cat'
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class CatService {

  private catPath = environment.apiurl + 'cats'

  constructor(private http: HttpClient, private authService: AuthService) { }

  create(data: any): Observable<Cat> {

    let header = new HttpHeaders();
    
    header = header.set("Authorization", `Bearer ${this.authService.getToken()}`);
    
    return this.http.post<Cat>(this.catPath, data, {headers:header});
  }
}
