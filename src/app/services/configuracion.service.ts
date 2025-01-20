import { Injectable } from '@angular/core';
import { InicialService } from './inicial.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionService {

  
  constructor(
    private inicialService: InicialService,
   
  ) { }

  getConfiguracion() {
    /* ----- Local ----- */
    /*
    this.cookieService.set(
      "cookie_INTRAMX-APPEB-SSO_LOGISNOMINA",
      "N030043:INTRAMX-APPEB-SSO_LOGISNOMINA:YWY0NjFmMzZiNzk0OGI0N2Q3ZWRkNzJmZjY2YmI4ZjcwMGViNDFlNA==#180.176.86.15#1587398064223#3500000#1587397964223#3500000#PFNlc3Npb25CZWFuPjx2aWdlbmNpYUNvb2tpZT4yMDIwLTA0LTIwIDEwOjU0OjI0LjIxNTwvdmlnZW5jaWFDb29raWU+PHZpZ2VuY2lhVG9rZW4vPjxhcHBJZD5JTlRSQU1YLUFQUEVCLVNTT19QUkVTVEFNT1ZBTE9SRVM8L2FwcElkPjxjZW50cm9Db3N0b3M+NzQ2MzwvY2VudHJvQ29zdG9zPjxleHBpcmVUb2tlbj42MDwvZXhwaXJlVG9rZW4+PGlkSGFzaD5OMDMwMDQzOklOVFJBTVgtQVBQRUItU1NPX1BSRVNUQU1PVkFMT1JFUzpZV1kwTmpGbU16WmlOemswT0dJME4yUTNaV1JrTnpKbVpqWTJZbUk0Wmpjd01HVmlOREZsTkE9PTwvaWRIYXNoPjxwZXJmaWw+PC9wZXJmaWw+PHB1ZXN0bz5HVEI4MTU8L3B1ZXN0bz48c2Vzc2lvbklkPk4wMzAwNDM6SU5UUkFNWC1BUFBFQi1TU09fUFJFU1RBTU9WQUxPUkVTOllXWTBOakZtTXpaaU56azBPR0kwTjJRM1pXUmtOekptWmpZMlltSTRaamN3TUdWaU5ERmxOQT09PC9zZXNzaW9uSWQ+PHVzdWFyaW8+bjAzMDA0MzwvdXN1YXJpbz48bm9tYnJlVXN1YXJpbz5aQVJBVEUgTUFSVElORVogU0FVTDwvbm9tYnJlVXN1YXJpbz48L1Nlc3Npb25CZWFuPg==#true#1.0#SANTEC_MX#PFNlc3Npb25CZWFuPjx2aWdlbmNpYUNvb2tpZT4yMDIwLTA0LTIwIDEwOjU0OjI0LjIxNTwvdmlnZW5jaWFDb29raWU+PHZpZ2VuY2lhVG9rZW4vPjxhcHBJZD5JTlRSQU1YLUFQUEVCLVNTT19QUkVTVEFNT1ZBTE9SRVM8L2FwcElkPjxjZW50cm9Db3N0b3M+NzQ2MzwvY2VudHJvQ29zdG9zPjxleHBpcmVUb2tlbj42MDwvZXhwaXJlVG9rZW4+PGlkSGFzaD5OMDMwMDQzOklOVFJBTVgtQVBQRUItU1NPX1BSRVNUQU1PVkFMT1JFUzpZV1kwTmpGbU16WmlOemswT0dJME4yUTNaV1JrTnpKbVpqWTJZbUk0Wmpjd01HVmlOREZsTkE9PTwvaWRIYXNoPjxwZXJmaWw+PC9wZXJmaWw+PHB1ZXN0bz5HVEI4MTU8L3B1ZXN0bz48c2Vzc2lvbklkPk4wMzAwNDM6SU5UUkFNWC1BUFBFQi1TU09fUFJFU1RBTU9WQUxPUkVTOllXWTBOakZtTXpaaU56azBPR0kwTjJRM1pXUmtOekptWmpZMlltSTRaamN3TUdWaU5ERmxOQT09PC9zZXNzaW9uSWQ+PHVzdWFyaW8+bjAzMDA0MzwvdXN1YXJpbz48bm9tYnJlVXN1YXJpbz5aQVJBVEUgTUFSVElORVogU0FVTDwvbm9tYnJlVXN1YXJpbz48L1Nlc3Npb25CZWFuPg=="
    );
    */
    /* ---------------- */
    this.inicialService.getConfiguracion().subscribe((response) => {
      console.log("------------------configuracion")
      console.log(response)
      // environment.host = response.app.services.presval;
      // environment.redirect = response.app.portal;
      // this.getInformacionUsuario();
    });
  }
}
