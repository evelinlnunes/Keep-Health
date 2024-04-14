import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login = { emailUsuario: '', senha: '' };
  usuariosCadastrados = [
    { email: 'usuario1@example.com', senha: 'senha123' },
    { email: 'usuario2@example.com', senha: 'abc123' }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
    if (typeof localStorage !== 'undefined'&& localStorage.getItem('loggedIn') === null) {
      localStorage.setItem('loggedIn', 'false'); 
      
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

    const savedUsersString = localStorage.getItem('usuariosCadastrados');
    if (savedUsersString) {
      const savedUsers = JSON.parse(savedUsersString);

      
      const usuario = savedUsers.find((user: any) => user.email === emailUsuario && user.senha === senha);
      if (usuario) {
        localStorage.setItem('loggedIn', 'true');
        this.router.navigate(['/home']);
      } else {
        localStorage.setItem('loggedIn', 'false');
        alert('Usuário ou senha inválidos');
      }
    } else {
      alert('Nenhum usuário cadastrado. Por favor, cadastre-se.');
    }
  };

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
  };

  cadastrar() {
    this.router.navigate(['/cadastro']);
  }
}