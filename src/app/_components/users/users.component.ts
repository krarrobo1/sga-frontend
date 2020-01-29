import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  Users = [];
  constructor(private user: UserService, private router: Router) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.user.getUsers().subscribe(
      res => this.Users = res.data,
      err => console.log(err)
    );
  }

  searchUser(termino) {
    termino = termino.toLowerCase();
    let match = [];
    for(let user of this.Users) {
      let nombre = user.name.toLowerCase();
      if (nombre.indexOf(termino) >= 0) {
        match.push(user);
      }
    }
    console.log(match);
  }
  deleteUser(elem) {
    const userid = elem.getAttribute('userid');
    this.router.navigate([`/user/${ userid }`]);
  }

  loadUser(elem) {
    const userid = elem.getAttribute('userid');
    this.router.navigate([`/user/${ userid }`]);
  }

}
