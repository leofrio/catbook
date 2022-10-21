import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalsModule } from './components/animals/animals.module';
import { HomeModule } from './components/home/home.module';
import { FooterModule } from './components/template/footer/footer.module';
import { HeaderModule } from './components/template/header/header.module';
import { ToastModule } from './components/template/toast/toast.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HomeModule,
    AnimalsModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    HeaderModule,
    ToastModule,
    FooterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
