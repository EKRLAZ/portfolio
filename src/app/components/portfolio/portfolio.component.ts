import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/models/item.interface';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {


  public items: Item[]

  constructor() { }

  

  ngOnInit(): void {

  
    this.items = [{
      'title': 'Spooky'.toUpperCase(),
      'url': './../../assets/sppokypage.png',
      'desc': 'Historias de terror, Podcasts y Musica'.toUpperCase(),
      'link': 'https://play.google.com/store/apps/details?id=io.spooky.app'
    },{
      'title': 'Spooky - AdminPage'.toUpperCase(),
      'url': './../../assets/sppokypagenode.png',
      'desc': 'Administrador Back-End & Front-End'.toUpperCase(),
      'link': 'https://github.com/EKRLAZ/spooky-admin'
    },{
      'title': 'RadioCreepy'.toUpperCase(),
      'url': './../../assets/radiocreepypage.png',
      'desc': ' Escucha historias narradas por los mejores youtubers de terror '.toUpperCase(),
      'link': 'https://radio-creepy.web.app'
    },{
      'title': 'Creepypastas Reader'.toUpperCase(),
      'url': './../../assets/creepypasta.png',
      'desc': ' ** En desarrollo ** - Lee más de 14 mil historias, las populares de internet. '.toUpperCase(),
      'link': 'https://play.google.com/store/apps/details?id=xx.xxx.xx'
    }]
    

  }

  openLink(url: string) {
    window.open(url, "_blank")
  }

}
