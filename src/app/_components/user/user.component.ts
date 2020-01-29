import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../_services/user.service';
import { CatalogoService } from '../../_services/catalogo.service';
import { DomElementSchemaRegistry } from '@angular/compiler';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private catalogoService: CatalogoService) { }
  userData;
  Areas;
  Titulations;
  Roles;

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      res => this.loadUserData(res.id),
      err => console.log(err));

    this.loadRoles();
    this.loadAreas();
  }

  loadUserData(id) {
    this.userService.loadUser(id).subscribe(res => {this.userData = res.data, console.log(res.data); }, err => console.log(err));
  }

  loadAreas() {
    this.catalogoService.getTitulations().subscribe(
      res => this.Areas = res.data,
      err => console.log(err)
    );
  }

  loadRoles() {
    this.catalogoService.getRoles().subscribe(
      res => this.Roles = res.data,
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
