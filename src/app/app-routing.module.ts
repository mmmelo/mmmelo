import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
    {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
    { path: 'github', loadChildren: () => import('./github/github.module').then(m => m.GithubModule) }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
