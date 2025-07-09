import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable({
    providedIn: 'root',
})
export class HttpRest {
    baseUrl: string = 'https://jsonplaceholder.typicode.com/todos/1'
    constructor(private http: HttpClient) {}
    getContent(): Observable<any> {
        return this.http.get(this.baseUrl)
    }
}
