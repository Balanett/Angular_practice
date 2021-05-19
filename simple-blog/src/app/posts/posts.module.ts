import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog/blog.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { PostItemComponent } from './post-item/post-item.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    BlogComponent,
    PostItemComponent
  ],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatCardModule,
        MatButtonModule,
        RouterModule
    ],
  exports: [
    BlogComponent
  ]
})
export class PostsModule { }
