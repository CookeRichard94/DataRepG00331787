import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {UpcomingService} from '../services/upcoming.service';

@Component({
  selector: 'app-add-upcoming',
  templateUrl: './add-upcoming.component.html',
  styleUrls: ['./add-upcoming.component.css']
})
export class AddUpcomingComponent implements OnInit {

  constructor(private service:UpcomingService) { }

  onAddPost(form: NgForm) {

    this.service.addPost(form.value.country, form.value.city, form.value.year).subscribe();
    
    console.log(form.value);
    form.resetForm();
  }

  ngOnInit() {
  }

}
