import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes'; // alohida fayldan chaqiriladi

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppComponent, // standalone komponent sifatida
  ],
//   bootstrap: [AppComponent],
})
export class AppModule {}
