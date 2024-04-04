import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DietasComponent } from '../dietas.component';
import { log } from 'console';

@Component({
  selector: 'app-diet-detail',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './diet-detail.component.html',
  styleUrl: './diet-detail.component.scss'
})
export class DietDetailComponent {
  alimentosID: any[] = [];
  alimentoID : any = {}


  constructor(
    private route: ActivatedRoute,
  ) { }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params);
      const id = Number(params['id']);
      console.log(id);

      if (typeof localStorage !== 'undefined') {
        const alimentosString = localStorage.getItem('alimentos');
        if (alimentosString) {
          this.alimentosID = JSON.parse(alimentosString);
        

        }

        this.alimentoID = this.alimentosID.find(item => item.id === id)


        console.log("alimentoID = ", this.alimentoID);

      }


    });
  }
}
