import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PostsService } from './posts.service';
import {HeaderComponent} from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {PostsModule} from './posts/posts.module';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {MatCardModule} from '@angular/material/card';
import { FooterComponent } from './footer/footer.component';
import { PageComponent } from './page/page.component';
import { ContactComponent } from './contact/contact.component';
import {PostRoutingModule} from "./posts/post-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostDetailComponent,
    NotFoundComponent,
    FooterComponent,
    PageComponent,
    ContactComponent,
  ],
    imports: [
        BrowserModule,
        MatToolbarModule,
        PostsModule,
        HttpClientModule,
        AppRoutingModule,
        MatCardModule,
        PostRoutingModule
    ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
