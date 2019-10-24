import { estadoDTO } from "./estado.dto";

export interface cidadeDTO{
    id: string;
    nome: string;
    estado? : estadoDTO;
}