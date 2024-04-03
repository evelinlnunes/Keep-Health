import { Component } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  usuario = {
    nome: '',
    email: '',
    dataDeNascimento: '',
    altura: '',
    senha: '',
    peso: '',
    confirmarSenha: ''
  };

  constructor() { }

  cadastrarUsuario() {
    const { nome, email, dataDeNascimento, altura, peso, senha, confirmarSenha } = this.usuario;

    if (!nome || !email || !dataDeNascimento || !senha || !confirmarSenha || !altura || !peso) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem. Por favor, tente novamente.');
      return;
    }

    
    const userString = localStorage.getItem('usuariosCadastrados');
    let usuariosCadastrados: any[] = [];
    if (userString) {
      usuariosCadastrados = JSON.parse(userString);
    }

  
    const usuarioExistente = usuariosCadastrados.find((user: any) => user.email === email);
    if (usuarioExistente) {
      alert('Este e-mail já está cadastrado. Por favor, utilize outro e-mail.');
      return;
    }

    
    usuariosCadastrados.push({
      nome,
      email,
      dataDeNascimento,
      altura,
      peso,
      senha
    });
    
    localStorage.setItem('usuariosCadastrados', JSON.stringify(usuariosCadastrados));

    window.location.href = '/login';
  }

  voltar() {
    window.location.href = '/login';
  }
}