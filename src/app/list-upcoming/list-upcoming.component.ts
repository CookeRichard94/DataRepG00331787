import { Component, OnInit } from '@angular/core';
import {PostService} from '../services/post.service';
import { Observable } from 'rxjs';
import {Post} from '../post.model';

@Component({
  selector: 'app-list-upcoming',
  templateUrl: './list-upcoming.component.html',
  styleUrls: ['./list-upcoming.component.css']
})
export class ListUpcomingComponent implements OnInit {

  posts: any = [];

  constructor(private ps:PostService){}

  ngOnInit(){

    this.ps.getPostsData().subscribe(data => {
        this.posts = data;
    });


   }

   onDelete(id:String){
    console.log("Delete called " + id);
    this.ps.deletePost(id).subscribe(() =>
    {
      this.ngOnInit();
    });

   }

}
