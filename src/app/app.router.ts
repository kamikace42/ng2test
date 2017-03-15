import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ResolveService } from './resolve.service';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: MenuComponent },
  {
    path: 'pokemon/:id',
    component: InfoCardComponent,
    data: {
      title: 'Pokemon Info'
    },
    resolve: {
      data: ResolveService,
    }
  },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [AppComponent];
