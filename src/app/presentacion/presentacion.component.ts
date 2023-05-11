import { Component, OnInit } from '@angular/core';
import { persona } from '../model/persona.model';
import { PersonaService } from '../service/persona.service';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit{
  persona: persona = new persona("","","","","","","");
  constructor(public personaService: PersonaService){

  }
  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data =>{this.persona = data})
  }

}
