import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post/post.component';
import { AuthComponent } from './auth/auth.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'post-list',
    component: PostListComponent,
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'post-edit',
    component: PostEditComponent,
  },
  {
    path: '',
    redirectTo: 'post-list',
    pathMatch: 'full',
  },
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostListComponent,
    PostComponent,
    AuthComponent,
    PostEditComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
