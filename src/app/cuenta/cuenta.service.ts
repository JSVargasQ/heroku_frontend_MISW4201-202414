import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegistroCuenta } from './registrocuenta';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

  private backUrl: string = "http://127.0.0.1:5000"
    
  constructor(private http: HttpClient) { }

  getTransaccionesUsuario(usuario: number, token: string): Observable<RegistroCuenta[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.http.get<RegistroCuenta[]>(`${this.backUrl}/usuario/${usuario}/transacciones`, { headers: headers })
  }
}
