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

public Post(url:string,body:any){

  return this.httpClient.post(url,body);

}


}
