import { Component, OnInit } from '@angular/core';
import { PostService } from '../../_services/post.service';
import { Post } from '../../_models/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  Posts: Post[] = [];
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPosts();
  }


  getPosts() {
    this.postService.getPosts().subscribe(
      res => {
        this.Posts = res.data;
        console.log(this.Posts);
      },
      err => console.log(err)
    );
  }

  loadPost(elem) {
    const postid = elem.getAttribute('postid');
    this.postService.getPost(postid).subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }
  updatePost(elem) {
    // this.postService.updatePost(postid, postData)
  }

  deletePost(elem) {

    const postid = elem.getAttribute('postid');
    this.postService.deletePost(postid).subscribe(
      res => this.getPosts(),
      err => console.log(err)
    );
  }

}
