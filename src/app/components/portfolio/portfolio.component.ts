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
      'url': 'https://i.imgur.com/YxRTgCH.png',
      'desc': 'Historias de terror, Podcasts y Musica'.toUpperCase(),
      'link': 'https://play.google.com/store/apps/details?id=io.spooky.app'
    },{
      'title': 'Spooky - AdminPage'.toUpperCase(),
      'url': 'https://i.imgur.com/QUWMSbJ.png',
      'desc': 'Administrador Back-End & Front-End'.toUpperCase(),
      'link': 'https://github.com/EKRLAZ/spooky-admin'
    },{
      'title': 'RadioCreepy'.toUpperCase(),
      'url': 'https://i.imgur.com/4uhTCT1.png',
      'desc': ' Escucha historias narradas por los mejores youtubers de terror '.toUpperCase(),
      'link': 'https://radio-creepy.web.app'
    },{
      'title': 'Creepypastas Reader'.toUpperCase(),
      'url': 'https://i.imgur.com/WB1rvzZ.png',
      'desc': ' ** En desarrollo ** - Lee más de 14 mil historias, las populares de internet. '.toUpperCase(),
      'link': 'https://play.google.com/store/apps/details?id=xx.xxx.xx'
    }]
    

  }

  openLink(url: string) {
    window.open(url, "_blank")
  }

}
