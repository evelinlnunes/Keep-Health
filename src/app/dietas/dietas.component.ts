import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-dietas',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './dietas.component.html',
  styleUrl: './dietas.component.scss'
})
export class DietasComponent {
  // alimentos: any[] = [
  //   {
  //     id: 1,
  //     name: "Abacate",
  //     description: "Fruta rica em gorduras saudáveis e fibras.",
  //     qttCalories: 160,
  //     qttDaysFeed: 2,
  //     imageLink: "../assets/alimentos.jpg"
  //   },
  //   {
  //     id: 2,
  //     name: "Ovo",
  //     description: "Alimento rico em proteínas e nutrientes essenciais.",
  //     qttCalories: 70,
  //     qttDaysFeed: 7,
  //     imageLink: "../assets/alimentos.jpg"
  //   },
  //   {
  //     id: 3,
  //     name: "Salmão",
  //     description: "Peixe rico em ácidos graxos ômega-3 e proteínas.",
  //     qttCalories: 220,
  //     qttDaysFeed: 4,
  //     imageLink: "../assets/alimentos.jpg"
  //   },
  //   {
  //     id: 4,
  //     name: "Brócolis",
  //     description: "Vegetal rico em vitaminas e minerais.",
  //     qttCalories: 50,
  //     qttDaysFeed: 5,
  //     imageLink: "../assets/alimentos.jpg"
  //   },
  //   {
  //     id: 5,
  //     name: "Quinoa",
  //     description: "Grão rico em proteínas e fibras, sem glúten.",
  //     qttCalories: 120,
  //     qttDaysFeed: 3,
  //     imageLink: "../assets/alimentos.jpg"
  //   },
  //   {
  //     id: 6,
  //     name: "Amêndoa",
  //     description: "Fruto seco rico em gorduras saudáveis e proteínas.",
  //     qttCalories: 160,
  //     qttDaysFeed: 2,
  //     imageLink: "../assets/alimentos.jpg"
  //   },
  //   {
  //     id: 7,
  //     name: "Iogurte Grego",
  //     description: "Iogurte rico em proteínas e baixo teor de gordura.",
  //     qttCalories: 100,
  //     qttDaysFeed: 7,
  //     imageLink: "../assets/alimentos.jpg"
  //   },
  //   {
  //     id: 8,
  //     name: "Feijão Preto",
  //     description: "Leguminosa rica em proteínas e fibras.",
  //     qttCalories: 120,
  //     qttDaysFeed: 4,
  //     imageLink: "../assets/alimentos.jpg"
  //   },
  //   {
  //     id: 9,
  //     name: "Abacaxi",
  //     description: "Fruta tropical rica em vitamina C e fibras.",
  //     qttCalories: 50,
  //     qttDaysFeed: 5,
  //     imageLink: "../assets/alimentos.jpg"
  //   },
  //   {
  //     id: 10,
  //     name: "Espinafre",
  //     description: "Vegetal rico em ferro e vitaminas.",
  //     qttCalories: 30,
  //     qttDaysFeed: 3,
  //     imageLink: "../assets/alimentos.jpg"
  //   }
  // ];
  alimentos: any[] = [];
  alimentosFiltrados: any[] = [];
  pesquisa: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {

 
    if (typeof localStorage !== 'undefined') {
      const alimentosString = localStorage.getItem('alimentos');
      if (alimentosString) {
        this.alimentos = JSON.parse(alimentosString);
      }

      this.alimentosFiltrados = this.alimentos;
    }
  }

  pesquisarAlimento(): void {
    if (this.pesquisa.trim() === '') {
      
      this.alimentosFiltrados = this.alimentos;
    } else {
      
      this.alimentosFiltrados = this.alimentos.filter(alimento =>
        alimento.name.toLowerCase().includes(this.pesquisa.toLowerCase())
      );
    }
  }

  detalhar(id: number) {
    this.router.navigate(['dietas/', id]);
  }

}
