import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-estudante-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './estudante-form.component.html',
  styleUrl: './estudante-form.component.css'
})
export class EstudanteFormComponent {

  //criar objeto estudante

  estudante = {
    matricula: '',
    nome: ''
  }

  estudanteSalvo: any = null;

  constructor(){
    //carregar lista de estudantes
    this.carregarDados();
  }


  salvar(){
    localStorage.setItem('dados', JSON.stringify(this.estudante));
    this.carregarDados();
  }

  carregarDados(){
    //carregar dados
    const data = localStorage.getItem('dados');
    this.estudanteSalvo = data ? JSON.parse(data) : null;
  }

  limparDados(){
    localStorage.removeItem('dados');
    this.estudanteSalvo = null;
  }

}
