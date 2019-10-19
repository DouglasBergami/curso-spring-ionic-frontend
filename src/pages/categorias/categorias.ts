import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriaService } from '../../services/domain/categoria.service';
import { CategoriaDTO } from '../../models/categoria.dto';
import { API_CONFIG } from '../../config/api.config';
import { ProdutoService } from '../../services/domain/produto.service';

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  categorias: CategoriaDTO[];

  bucketURL: String = API_CONFIG.bucketBaseUrl;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public categoriaService: CategoriaService) {
  }

  ionViewDidLoad() {
    this.categoriaService.findAll().subscribe(dados => {
      this.categorias = dados;
    },
    error => {}
    );
  }

  showProdutos(idCategoria: string){
    this.navCtrl.push("ProdutosPage", {idCategoriAtributo : idCategoria});
  }

}
