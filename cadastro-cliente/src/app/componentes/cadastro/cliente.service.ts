import { Cliente } from './cliente';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class ClienteService {

  private readonly API = 'https://solid-credit-production.up.railway.app/api/cliente';

  constructor(private http: HttpClient) {}

  listar(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.API);
  }

  salvar(registro: Partial<Cliente>) {
    if(registro._id) {
      return this.atualizar(registro);
    }
    return this.cadastrarCliente(registro);
  }

  private cadastrarCliente(registro: Partial<Cliente>) {
    return this.http.post<Cliente>(this.API, registro);
  }

  private atualizar(registro: Partial<Cliente>) {
    return this.http.put<Cliente>(`${this.API}/${registro._id}`, registro);
  }

  buscarCursoId(id: string) {
    return this.http.get<Cliente>(`${this.API}/${id}`)
  }

}
