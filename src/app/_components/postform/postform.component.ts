import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postform',
  templateUrl: './postform.component.html',
  styleUrls: ['./postform.component.css']
})
export class PostformComponent implements OnInit {

  formData = {};
  constructor() { }

  ngOnInit() {
  }

  getFormData() {
    console.log(this.formData);
  }

}
