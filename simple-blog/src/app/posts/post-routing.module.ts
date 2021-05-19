import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BlogComponent} from './blog/blog.component';
import {PostDetailComponent} from '../post-detail/post-detail.component';
import {PageComponent} from '../page/page.component';
import {ContactComponent} from '../contact/contact.component';
import {NotFoundComponent} from '../not-found/not-found.component';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path: '', component: BlogComponent},
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
export class PostRoutingModule { }
