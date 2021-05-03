import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { XyzComponent } from './xyz/xyz.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { PromotionComponent } from './promotion/promotion.component';
import { PromotiontitleComponent } from './promotiontitle/promotiontitle.component';

@NgModule({
  declarations: [
    AppComponent,
    XyzComponent,
    CabecalhoComponent,
    FuncionarioComponent,
    PromotionComponent,
    PromotiontitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
