import { Component, OnInit } from '@angular/core';

import { PersonaService } from '../service/persona.service';
import { persona } from '../model/persona.model';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
persona: persona = new persona("","");//,"");

  constructor(public personaService: PersonaService) {
  }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data =>{this.persona = data})
  }

}
