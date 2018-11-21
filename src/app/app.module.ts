import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import {PostService} from './services/post.service';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from "@angular/forms";
import { MatInputModule,
  MatMenuModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatExpansionModule} from '@angular/material';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { AddUpcomingComponent } from './add-upcoming/add-upcoming.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { ListReviewComponent } from './list-review/list-review.component';
import { UpdateReviewComponent } from './update-review/update-review.component';
import { ListUpcomingComponent } from './list-upcoming/list-upcoming.component';
import { UpdateUpcomingComponent } from './update-upcoming/update-upcoming.component';

const appRoutes: Routes = [
  {
    path: 'review',
    component: PostDetailsComponent
  },
  {
    path: 'create',
    component: PostCreateComponent
  },
  {
    path: 'edit/:id',
    component: PostEditComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    PostDetailsComponent,
    PostCreateComponent,
    PostEditComponent,
    AddUpcomingComponent,
    AddReviewComponent,
    PhotoGalleryComponent,
    ListReviewComponent,
    UpdateReviewComponent,
    ListUpcomingComponent,
    UpdateUpcomingComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatMenuModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
