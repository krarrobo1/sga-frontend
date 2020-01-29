import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { NgxSummernoteModule } from 'node_modules/ngx-summernote';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './_components/login/login.component';

import { AuthService } from './_services/auth.service';
import { TokenInterceptorService } from './_services/token-interceptor.service';


import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardComponent } from './_components/dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { UsersComponent } from './_components/users/users.component';
import { PostsComponent } from './_components/posts/posts.component';
import { DashmenuComponent } from './_components/dashmenu/dashmenu.component';
import { UserformComponent } from './_components/userform/userform.component';
import { PostformComponent } from './_components/postform/postform.component';
import { ResourcesComponent } from './_components/resources/resources.component';
import { UserComponent } from './_components/user/user.component';
import { PostComponent } from './_components/post/post.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    UsersComponent,
    PostsComponent,
    DashmenuComponent,
    UserformComponent,
    PostformComponent,
    ResourcesComponent,
    UserComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxSummernoteModule
  ],
  providers: [AuthService, AuthGuard, { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
