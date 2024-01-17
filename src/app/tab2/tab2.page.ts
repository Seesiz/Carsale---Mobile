import { Component } from '@angular/core';
import { GeneraliserService } from './../Service/generaliser.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  caracter: any[] = [];
  selectedFiles: File[] = [];
  modeles: any[] = [];
  categories: any[] = [];
  etats:any[] = [];
  idEtat = "0";
  idCategorie = "0";
  idModel = "0";
  couleur: string = '#ff0000';
  plaque = "";
  prix:number = 0;
  
  
  constructor(private generaliserService:GeneraliserService) {}
  
  
  async ngOnInit() {
    await this.getModeles();
    await this.getCategories(); 
    await this.getEtats();
  }
  
  async getModeles(){
    try {
      const response = await this.generaliserService.getAll('models');
      this.modeles = response;
    } catch (error) {
      alert(error);
    }
  }
  
  async getCategories(){
    try {
      const response = await this.generaliserService.getAll('categories');
      this.categories = response;
    } catch (error) {
      alert(error);
    }
  }
  
  async getEtats(){
    try {
      const response = await this.generaliserService.getAll('etats');
      this.etats = response;
    } catch (error) {
      alert(error);
    }
  }
  
  
  ajouter(){
    var model = this.modeles.find(item => item.idModel === parseInt(this.idModel));
    var categorie = this.categories.find(item => item.idCategorie === parseInt(this.idCategorie));
    var etat = this.etats.find(item => item.idEtat === parseInt(this.idEtat));
    var annonce = {
      dateAnnonce:this.dateNow(),
      annonceur:{},
      voiture:{
          personne: {},
          categorie: categorie,
          model: model,
          couleur: this.couleur,
          plaque: this.plaque,
          prix: this.prix,
          etat: etat
      },
      detailVoitures:this.caracter,
      photos:null    
    };
    console.log(this.selectedFiles);
      // this.generaliserService.insert("annonces",annonce);
  }
  
  
  dateNow(){
    var now = new Date();
    var resp = now.getFullYear()+"-";
    if(now.getMonth() + 1 < 10) resp += "0" + (now.getMonth() + 1);
    else resp += now.getMonth() + 1;
    resp += "-";
    if(now.getDate() < 10) resp += "0" + now.getDate();
    else resp += now.getDate();
    resp += "T";
    if(now.getHours() < 10) resp += "0" + now.getHours();
    else resp += now.getHours();
    resp += ":";
    if(now.getMinutes() < 10) resp += "0" + now.getMinutes();
    else resp += now.getMinutes();
    resp += ":";    
    if(now.getSeconds() < 10) resp += "0" + now.getSeconds();
    else resp += now.getSeconds();
    return resp;
  }
  

  getThumbnailUrl(file: File): string {
    const objectUrl = URL.createObjectURL(file);
    return objectUrl;
  }

  onFileSelected(event: any) {
    let hadError = false;
    const fileInput = event.target;
    if (fileInput.files.length > 0) {
      for (let i = 0; i < fileInput.files.length; i++) {
        const currentFile = fileInput.files[i];
        if (currentFile.type.startsWith('image/')) {
          this.selectedFiles.push(currentFile);
        } else {
          hadError = true;
        }
      }

      if (hadError) {
        console.error('Certains fichiers ne sont pas des images.');
      }
    } else {
      this.selectedFiles = [];
    }
  }

  deleteFile(index: number) {
    this.selectedFiles.splice(index, 1);
  }

  onDragEnter(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    const currentTarget = event.currentTarget as HTMLElement;
    currentTarget.classList.add('drag-over');
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    const currentTarget = event.currentTarget as HTMLElement;
    currentTarget.classList.add('drag-over');
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    const currentTarget = event.currentTarget as HTMLElement;
    currentTarget.classList.remove('drag-over');
  }

  onDrop(event: DragEvent) {
    let hadError = false;
    event.preventDefault();
    event.stopPropagation();
    const currentTarget = event.currentTarget as HTMLElement;
    currentTarget.classList.remove('drag-over');

    const files = event.dataTransfer?.files;

    if (files) {
      for (let i = 0; i < files.length; i++) {
        const currentFile = files[i];
        if (currentFile.type.startsWith('image/')) {
          this.selectedFiles.push(currentFile);
        } else {
          hadError = true;
        }
      }

      if (hadError) {
        console.error('Certains fichiers déposés ne sont pas des images.');
      }
    }
  }
}
