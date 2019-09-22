import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { cidadeDTO } from "../../models/cidade.dto";
import { API_CONFIG } from "../../config/api.config";

@Injectable()
export class CidadeService{

    constructor(public http: HttpClient){

    }

    findAll(idEstado: string) : Observable<cidadeDTO[]>{
        return this.http.get<cidadeDTO[]>(`${API_CONFIG.baseUrl}/estados/${idEstado}/cidades`);
    }
    
}