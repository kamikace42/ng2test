import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app.router";
import { MenuComponent } from './menu/menu.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ResolveService } from "./resolve.service";
import { GetApiService } from "./get-api.service";
import { TestComponent } from './test/test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InfoCardComponent,
    PageNotFoundComponent,
    TestComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ResolveService, GetApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
