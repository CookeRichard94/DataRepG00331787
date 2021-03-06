import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Upcoming} from '../upcoming.model';
import { UpcomingService } from '../services/upcoming.service';

@Component({
  selector: 'app-list-upcoming',
  templateUrl: './list-upcoming.component.html',
  styleUrls: ['./list-upcoming.component.css']
})
export class ListUpcomingComponent implements OnInit {

  upcoming: any = [];

  constructor(private ps:UpcomingService){}

  ngOnInit(){

    this.ps.getPostsData().subscribe(data => {
        this.upcoming = data;
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
