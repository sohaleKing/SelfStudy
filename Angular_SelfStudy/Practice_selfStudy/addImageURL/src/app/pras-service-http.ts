import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/http'

@Injectable({
  providedIn: 'root'
})
export class PrasServiceHttp {
  private apiUrl = 'test'

  constructor(private http :HttpClient) { 

    getParas(){
      return this.http.get(this.apiUrl)
    }
  }
}
