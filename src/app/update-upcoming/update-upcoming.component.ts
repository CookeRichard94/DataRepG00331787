import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {UpcomingService} from '../services/upcoming.service';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-update-upcoming',
  templateUrl: './update-upcoming.component.html',
  styleUrls: ['./update-upcoming.component.css']
})
export class UpdateUpcomingComponent implements OnInit {

  upcoming : any = [];
  constructor(private route:ActivatedRoute, private service:UpcomingService,
  private router:Router) { }

  ngOnInit() {

    console.log(this.route.snapshot.params['id']);

    this.service.getPost(this.route.snapshot.params['id'])
    .subscribe(data =>
    {
      this.upcoming = data;
    });
  }

  onEditPost(form: NgForm){
    this.service.updatePost(this.upcoming._id, form.value.country, form.value.year, form.value.city)
    .subscribe(() => 
  {
    this.router.navigate(['/upcoming']);
  });
  }

}



