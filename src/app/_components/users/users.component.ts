import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/User';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  Users: User[] = [];
  constructor(private user: UserService) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.user.getUsers().subscribe(
      res => this.Users = res.data,
      err => console.log(err)
    );
  }
  deleteUser() {
    console.log('Borrar user');
  }

  updateUser() {
    console.log('Update user');
  }

}
