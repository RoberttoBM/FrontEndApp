import { Component, OnInit } from '@angular/core';
import { ModalEsperaPage } from '../modal-espera/modal-espera.page';
import { Usuario } from '../../interfaces/IUsuario';
import { UsuarioLocalService } from '../../services/usuario/usuario-local.service';
import { AuthService } from '../../services/auth/auth.service';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { Network } from '@ionic-native/network/ngx';


@Component({
  selector: 'app-asistencias',
  templateUrl: './asistencias.page.html',
  styleUrls: ['./asistencias.page.scss'],
})
export class AsistenciasPage implements OnInit {

  Usuario: Usuario = { IDPER: 0, NOMPER: "", APEPER: "", DNIPER: 0, DIRPER: "", GRAAUL: "", SECAUL: "", ASISTENCIAS: "", CB: "", FALTAS: "", MV: "", USUPER: "", CONTRPER: "" }


  constructor(
    private usuarioLocalService: UsuarioLocalService,
    private alertController: AlertController,
    private modalCtrl: ModalController,
    private authService: AuthService,
    private network: Network,
    private toastCtrl: ToastController, ) {

    this.usuarioLocalService.getUser().then(resp => {
      this.Usuario = resp;
    });

  }

  async presentToast(message: string, color: string) {
    const toast = await this.toastCtrl.create({
      color,
      message,
      duration: 1000
    });
    toast.present();
  }

  ngOnInit() { }

  //Espera para cargar los datos
  async onModal(dato) {
    let con = this.network.type;
    console.log(con);
    if (con != this.network.Connection.NONE && con != this.network.Connection.UNKNOWN) {
      const modal = await this.modalCtrl.create({
        component: ModalEsperaPage,
        componentProps: {
          dato
        }
      });
      return await modal.present();
    }

  }

  async presentAlert() {
    const alert = await this.alertController.create({
      //header: 'ASISTENCIAS INAPROPIADAS:',
      //subHeader: '',
      message: 'Si el(la) estudiante asiste tarde o no cumple con los reglamentos al llegar a la Institución se considerará como una Asistencia Inadecuada',
      buttons: ['OK']
    });
    await alert.present();
  }

}
