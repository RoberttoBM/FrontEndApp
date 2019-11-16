import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class GraficosService {

  constructor(private http:HttpClient) { }
  url = environment.url_api_rest

  getPromedio():Observable<any>{
    return this.http.get(`${this.url}/graficos/promedio`);
  }

}
 