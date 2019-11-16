import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AsistenciasService {

  constructor(public http: HttpClient) { }
  url = environment.url_api_rest


  getAll():Observable<any>{

    return this.http.get(`${this.url}/asistencias/ver`);

  }

}
