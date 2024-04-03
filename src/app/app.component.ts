import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { SharedModule } from './shared/shared.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Keep-Health';
  alimentos = [
    {
      id: 1,
      name: "Abacate",
      description: "Fruta rica em gorduras saudáveis e fibras.",
      qttCalories: 160,
      qttDaysFeed: 2,
      imageLink: "../assets/alimentos.jpg"
    },
    {
      id: 2,
      name: "Ovo",
      description: "Alimento rico em proteínas e nutrientes essenciais.",
      qttCalories: 70,
      qttDaysFeed: 7,
      imageLink: "../assets/alimentos.jpg"
    },
    {
      id: 3,
      name: "Salmão",
      description: "Peixe rico em ácidos graxos ômega-3 e proteínas.",
      qttCalories: 220,
      qttDaysFeed: 4,
      imageLink: "../assets/alimentos.jpg"
    },
    {
      id: 4,
      name: "Brócolis",
      description: "Vegetal rico em vitaminas e minerais.",
      qttCalories: 50,
      qttDaysFeed: 5,
      imageLink: "../assets/alimentos.jpg"
    },
    {
      id: 5,
      name: "Quinoa",
      description: "Grão rico em proteínas e fibras, sem glúten.",
      qttCalories: 120,
      qttDaysFeed: 3,
      imageLink: "../assets/alimentos.jpg"
    },
    {
      id: 6,
      name: "Amêndoa",
      description: "Fruto seco rico em gorduras saudáveis e proteínas.",
      qttCalories: 160,
      qttDaysFeed: 2,
      imageLink: "../assets/alimentos.jpg"
    },
    {
      id: 7,
      name: "Iogurte Grego",
      description: "Iogurte rico em proteínas e baixo teor de gordura.",
      qttCalories: 100,
      qttDaysFeed: 7,
      imageLink: "../assets/alimentos.jpg"
    },
    {
      id: 8,
      name: "Feijão Preto",
      description: "Leguminosa rica em proteínas e fibras.",
      qttCalories: 120,
      qttDaysFeed: 4,
      imageLink: "../assets/alimentos.jpg"
    },
    {
      id: 9,
      name: "Abacaxi",
      description: "Fruta tropical rica em vitamina C e fibras.",
      qttCalories: 50,
      qttDaysFeed: 5,
      imageLink: "../assets/alimentos.jpg"
    },
    {
      id: 10,
      name: "Espinafre",
      description: "Vegetal rico em ferro e vitaminas.",
      qttCalories: 30,
      qttDaysFeed: 3,
      imageLink: "../assets/alimentos.jpg"
    }
  ];
  constructor() {
    // if (typeof localStorage !== 'undefined') {
    //   localStorage.setItem('alimentos', JSON.stringify(this.alimentos))
    // }
  }
}
