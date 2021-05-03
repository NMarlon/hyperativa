import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcionarios } from './funcionarios';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor(private _httpClient: HttpClient) { }
  private url = "http://localhost:3000/funcionarios";

  getFuncionarios() : Observable<Funcionarios[]>  {
  	return this._httpClient.get<Funcionarios[]>(this.url); 
  }
}
