import { NgModule } from '@angular/core';
import { HomeComponent, CardCustomPaginator } from './home.component';
import { BrowserModule } from '@angular/platform-browser';
import { FooterModule } from '../../components/UI/footer/footer.module';
import { HeaderModule } from '../../components/UI/header/header.module';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {
  MatPaginatorIntl,
  MatPaginatorModule,
} from '@angular/material/paginator';
import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    RouterOutlet,
    BrowserModule,
    FooterModule,
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
    HeaderModule,
  ],
  providers: [{ provide: MatPaginatorIntl, useClass: CardCustomPaginator }],
  bootstrap: [],
})
export class HomeModule {}
