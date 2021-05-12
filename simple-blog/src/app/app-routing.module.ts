import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PostDetailComponent} from './post-detail/post-detail.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {BlogComponent} from './posts/blog/blog.component';
import {PageComponent} from './page/page.component';
import {ContactComponent} from './contact/contact.component';

const routes: Routes = [
  {path: '', component: BlogComponent },
  {path: 'posts/:id', component: PostDetailComponent},
  {path: 'page', component: PageComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'posts/:id', component: PostDetailComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '404'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
