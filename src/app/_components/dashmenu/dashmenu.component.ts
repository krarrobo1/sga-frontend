import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { User } from '../../_models/User';


@Component({
  selector: 'app-dashmenu',
  templateUrl: './dashmenu.component.html',
  styleUrls: ['./dashmenu.component.css']
})
export class DashmenuComponent implements OnInit {

  currentUser: User;
  constructor(auth: AuthService) {
    this.currentUser = auth.currentUserValue;
  }

  ngOnInit() {
  }

}
