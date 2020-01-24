import { Component, OnInit } from '@angular/core';
import { CatalogoService } from '../../_services/catalogo.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

  Roles: any;
  Areas: any;
  select = false;
  Titulations: any = [];

  constructor(private catalogoService: CatalogoService) { }

  ngOnInit() {
    this.loadRoles();
    this.loadAreas();
  }

  loadRoles() {
    this.catalogoService.getRoles().subscribe(
      res => this.Roles = res.data,
      err => console.log(err)
    );
  }

  loadAreas() {
    this.catalogoService.getTitulations().subscribe(
      res => this.Areas = res.data,
      err => console.log(err)
    );
  }

  selectArea(value) {
    this.Areas.forEach(area => {
      if (`${area.id}` === value) {
        this.Titulations = area.titulaciones;
      }
    });

  }

}
