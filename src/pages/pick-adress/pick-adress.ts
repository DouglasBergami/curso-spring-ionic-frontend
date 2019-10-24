import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EnderecoDTO } from '../../models/endereco.dto';

@IonicPage()
@Component({
  selector: 'page-pick-adress',
  templateUrl: 'pick-adress.html',
})
export class PickAdressPage {

  items : EnderecoDTO[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.items = [
      {
        id : '1',
        logradouro : 'Rua Quinze de Novembro',
        complemento : 'Apto 200',
        bairro : 'Santa Mônica',
        cep : '48293822',
        cidade : {
          id : '1',
          nome : 'Uberlândia',
          estado : {
            id : '1',
            nome : 'Minas Gerais'
          }
        }
      },
      {
        id : '2',
        logradouro : 'Rua Quinze de Dezembro',
        complemento : 'Apto 300',
        bairro : 'Santa Fé',
        cep : '1165156',
        cidade : {
          id : '2',
          nome : 'Campinas',
          estado : {
            id : '1',
            nome : 'São Paulo'
          }
        }
      }
    ];
  }

}
