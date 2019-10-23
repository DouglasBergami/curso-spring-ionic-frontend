import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProdutoDTO } from '../../models/produto.dto';
import { ProdutoService } from '../../services/domain/produto.service';
import { API_CONFIG } from '../../config/api.config';

@IonicPage()
@Component({
  selector: 'page-produto-detail',
  templateUrl: 'produto-detail.html',
})
export class ProdutoDetailPage {

  item : ProdutoDTO;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public produtoService : ProdutoService) {
  }

  ionViewDidLoad() {
    let idProduto = this.navParams.get('idProdutoAtributo');
    
    this.produtoService.findById(idProduto)
    .subscribe(response => {
      this.item = response
      this.loadImageUrls();
    },
    erro => {});
    }

    loadImageUrls(){

      let item = this.item;

      this.produtoService.getImageFromBucket(item.id)
      .subscribe(response =>{
        item.imageUrl = `${API_CONFIG.bucketBaseUrl}/prod${item.id}.jpg`;
      },
      erro => {});
    }
  }

  

