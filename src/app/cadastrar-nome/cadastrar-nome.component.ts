import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { Exemplo } from '../exemplo.model';

@Component({
  selector: 'app-cadastrar-nome',
  templateUrl: './cadastrar-nome.component.html',
  styleUrls: ['./cadastrar-nome.component.scss']
})
export class CadastrarNomeComponent implements OnInit {

  nome: string;
  url: string;

  constructor(public appService: AppService, private router: Router) { }

  ngOnInit(): void {
  }

  cadastrar() {

    if (!this.nome) {
      return;
    }

    // const exemplo = new Exemplo();
    // exemplo.nome = this.nome;
    // exemplo.url = this.url;

    // const exemplo2: Exemplo = { nome: 'asdasd', url: 'http://' };

    this.appService.nomes.push({ nome: 'asdasd', url: 'http://' });

    this.nome = null;

    // this.router.navigateByUrl('lista');
  }

}
