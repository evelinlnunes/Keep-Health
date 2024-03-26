import { CommonModule } from '@angular/common';
import { Component, OnInit, PipeTransform } from '@angular/core';
import { CalculatorAgePipe } from '../calculator-age.pipe';
import { MetrosPipe } from '../metros.pipe';
import { AddressService } from '../address.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, CalculatorAgePipe, MetrosPipe, FormsModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})

export class PerfilComponent {
  usuario: any;
  endereco: any = {}
  cepInput: string = '';

  constructor(private addressService: AddressService) { }

  ngOnInit(): void {
    if (typeof localStorage !== 'undefined') {

      const usuarioString = localStorage.getItem('usuariosCadastrados');
      if (usuarioString) {
        const usuariosCadastrados = JSON.parse(usuarioString);
        this.usuario = usuariosCadastrados[0];
      }
    }
  }
  searchAddress(): void {
    // console.log(this.usuario, this.cepInput);
    let that = this;

    if (this.cepInput) {
       this.addressService.getAddress(this.cepInput).subscribe({
        next(value) {
          console.log(value)
          that.endereco = value;
          console.log("meu endereco eh: ",that.endereco.bairro);
          
        },
        error(err) {
          console.error(err)
        },
      });
      
    }
  }
}


