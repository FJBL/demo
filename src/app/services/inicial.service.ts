import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InicialService {


  constructor(private http: HttpClient) { }
  getConfiguracion(): Observable<any> {
    /* ----- Local ----- */
    /*
    return this.http.get(
      `https://gateway-mx-logistic-nomina-dev.appls.cto1.paas.gsnetcloud.corp/config/nomina-front-dev.json`,
      {}
    );
    */
    /* ----- Paas ----- */
    return this.http.get(`/config.json`, {});
  }
}
