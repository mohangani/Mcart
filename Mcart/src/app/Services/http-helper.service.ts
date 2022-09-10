import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpHelperService {
  constructor(private httpClient: HttpClient) { }

public Get(url:string){
  return this.httpClient.get(url);
}

public Post<T>(url:string,body:any): Observable<T>{

  return this.httpClient.post<T>(url,body);

}


}
