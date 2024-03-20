import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = { emailUsuario: '', senha: '' }; 
  usuariosCadastrados = [
    { email: 'usuario1@example.com', senha: 'senha123' },
    { email: 'usuario2@example.com', senha: 'abc123' }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    if (typeof localStorage !== 'undefined') {
      const savedEmail = localStorage.getItem('emailUsuario');
      if (savedEmail) {
        this.login.emailUsuario = savedEmail;
      }
      const savedSenha = localStorage.getItem('senhaUsuario');
      if (savedSenha) {
        this.login.senha = savedSenha;
      }
    }
  }

  entrar() {
    const { emailUsuario, senha } = this.login;
    const usuario = this.usuariosCadastrados.find(user => user.email === emailUsuario && user.senha === senha);
    if (usuario) {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('emailUsuario', emailUsuario);
        localStorage.setItem('senhaUsuario', senha);
      }
      this.router.navigate(['/home']);
    } else {
      alert('Usuário ou senha inválidos');
    }
  }
  esqueciMinhaSenha() {
    const { emailUsuario } = this.login;
    const usuario = this.usuariosCadastrados.find(user => user.email === emailUsuario);
  
    if (usuario) {
      
      const senhaPadrao = 'a1b2c4d4';
      this.login.senha = senhaPadrao;
  
      
      if (localStorage.getItem('emailUsuario')) {
        localStorage.setItem('senhaUsuario', senhaPadrao);
      }
  
      alert('Sua senha foi redefinida para a senha padrão. Você pode prosseguir utilizando essa senha.');
    } else {
      alert('Usuário não encontrado. Certifique-se de que o email está correto.');
    }
  }
  cadastrar() {
    this.router.navigate(['/cadastro']);
  }
}

