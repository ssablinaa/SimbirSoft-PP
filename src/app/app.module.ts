import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { RouterModule, RouterOutlet } from '@angular/router';
import { routes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModalModule } from './auth-modal/auth-modal.module';
import { AnimalsModule } from './pages/animals/animals.module';
import { HeaderModule } from './components/UI/header/header.module';
import { FooterModule } from './components/UI/footer/footer.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    RouterOutlet,
    HomeModule,
    AuthModalModule,
    AnimalsModule,
    HeaderModule,
    FooterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
