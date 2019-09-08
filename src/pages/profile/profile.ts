import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageService } from '../../services/storage.service';
import { ClienteService } from '../../services/domain/cliente.service';
import { ClienteDTO } from '../../models/cliente.dto';
import { API_CONFIG } from '../../config/api.config';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  clienteDTO: ClienteDTO;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public storageService: StorageService,
    public clienteServive: ClienteService) {

  }

  ionViewDidLoad() {
    let localUser = this.storageService.getLocalUser();
    if (localUser && localUser.email){
     this.clienteServive.findByEmail(localUser.email)
     .subscribe(response => {
       this.clienteDTO = response;
       this.getImageIfExists();
      },
      error =>{}
      );
    }
  }

  getImageIfExists(){
    this.clienteServive.getImageFromBucket(this.clienteDTO.id)
    .subscribe(response => {
      this.clienteDTO.imageUrl = `${API_CONFIG.bucketBaseUrl}/cp${this.clienteDTO.id}.jpg`;
    },
    error => {});
  }

}
