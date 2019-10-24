import { cidadeDTO } from "./cidade.dto";

export interface EnderecoDTO{
    id : string;
    logradouro : string;
    complemento : string;
    bairro : string;
    cep : string;
    cidade : cidadeDTO;
}