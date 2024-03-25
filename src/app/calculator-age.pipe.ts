import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculatorAge',
  standalone: true
})
export class CalculatorAgePipe implements PipeTransform {
  transform(dataDeNascimento: string): number {
    const hoje = new Date();
    const nascimento = new Date(dataDeNascimento);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mesAtual = hoje.getMonth() + 1;
    const diaAtual = hoje.getDate();
    const mesNascimento = nascimento.getMonth() + 1;
    const diaNascimento = nascimento.getDate();

    if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
      idade--;
    }

    return idade;
  }
}
