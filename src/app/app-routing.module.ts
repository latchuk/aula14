import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarNomeComponent } from './cadastrar-nome/cadastrar-nome.component';
import { ListarNomesComponent } from './listar-nomes/listar-nomes.component';


const routes: Routes = [

  { path: '', redirectTo: 'lista', pathMatch: 'full' },
  { path: 'cadastro', component: CadastrarNomeComponent },
  { path: 'lista', component: ListarNomesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
