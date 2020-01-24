import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './_components/login/login.component';
import { NavbarComponent } from './_components/navbar/navbar.component';

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





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    DashboardComponent,
    UsersComponent,
    PostsComponent,
    DashmenuComponent,
    UserformComponent,
    PostformComponent,
    ResourcesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuard, { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
