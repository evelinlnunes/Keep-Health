import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  usuario = {
    nome: '',
    email: '',
    dataDeNascimento: '',
    senha: '',
    confirmarSenha: ''
  };

  constructor() { }

  cadastrarUsuario() {
    const { nome, email, dataDeNascimento, senha, confirmarSenha } = this.usuario;

    if (!nome || !email || !dataDeNascimento || !senha || !confirmarSenha) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem. Por favor, tente novamente.');
      return;
    }

    // Verifica se já existe algum usuário cadastrado
    const userString = localStorage.getItem('usuariosCadastrados');
    let usuariosCadastrados: any[] = [];
    if (userString) {
      usuariosCadastrados = JSON.parse(userString);
    }

    // Verifica se o usuário já existe
    const usuarioExistente = usuariosCadastrados.find((user: any) => user.email === email);
    if (usuarioExistente) {
      alert('Este e-mail já está cadastrado. Por favor, utilize outro e-mail.');
      return;
    }

    // Adiciona o novo usuário à lista
    usuariosCadastrados.push({
      nome,
      email,
      dataDeNascimento,
      senha
    });
    // Salva a lista atualizada de usuários no localStorage
    localStorage.setItem('usuariosCadastrados', JSON.stringify(usuariosCadastrados));


    // const usuario = {
    //   nome,
    //   email,
    //   dataDeNascimento,
    //   senha
    // };

    // const userString = localStorage.getItem('usuarioCadastrado')
    // if (userString) {
    //   const user = JSON.parse(userString)

    // }

    // localStorage.setItem('usuarioCadastrado', JSON.stringify(usuario));

    window.location.href = '/login';
  }

  voltar() {
    window.location.href = '/login';
  }
}