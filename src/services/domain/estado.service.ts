import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { estadoDTO } from "../../models/estado.dto";
import { API_CONFIG } from "../../config/api.config";

@Injectable()
export class EstadoService{

    constructor(public http: HttpClient){

    }

    findAll() : Observable<estadoDTO[]>{
        return this.http.get<estadoDTO[]>(`${API_CONFIG.baseUrl}/estados`);
    }
}