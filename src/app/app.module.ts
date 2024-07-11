import { PageComponent } from './page/page/page.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page2Component } from './page-2/page-2.component';
import { Page3Component } from './page-3/page-3.component';
@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    Page2Component,
    Page3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
