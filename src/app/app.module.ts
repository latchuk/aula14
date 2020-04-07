import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarNomesComponent } from './listar-nomes/listar-nomes.component';
import { CadastrarNomeComponent } from './cadastrar-nome/cadastrar-nome.component';

import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    ListarNomesComponent,
    CadastrarNomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
