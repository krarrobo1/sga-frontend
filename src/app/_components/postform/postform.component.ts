import { Component, OnInit } from '@angular/core';
import { PostService } from '../../_services/post.service';
import { CatalogoService } from '../../_services/catalogo.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-postform',
  templateUrl: './postform.component.html',
  styleUrls: ['./postform.component.css']
})
export class PostformComponent implements OnInit {

  formData = {};
  keyWords = [];
  constructor(private postService: PostService, private catalogoService: CatalogoService, private navigator: Router) {
    this.getKeywords();
  }

  ngOnInit() {
  }

  getKeywords() {
    this.catalogoService.getKeywords().subscribe(
      res => this.keyWords = res.data,
      err => console.log(err)
    );
  }
  createPost() {
    this.postService.createPost(this.formData).subscribe(
      res => {window.alert('Post creado satisfactoriamente!'); this.navigator.navigate(['/posts']); },
      err => console.log(err)
    );
  }

}
