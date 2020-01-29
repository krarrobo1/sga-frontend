import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './_components/login/login.component';
import { DashboardComponent } from './_components/dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { UsersComponent } from './_components/users/users.component';
import { PostsComponent } from './_components/posts/posts.component';
import { UserformComponent } from './_components/userform/userform.component';
import { PostformComponent } from './_components/postform/postform.component';
import { ResourcesComponent } from './_components/resources/resources.component';
import { UserComponent } from './_components/user/user.component';
import { PostComponent } from './_components/post/post.component';





const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'posts',
    component: PostsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'post/:id',
    component: PostComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'user/:id',
    component: UserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'userform',
    component: UserformComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'postform',
    component: PostformComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'resources',
    component: ResourcesComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
