import entradaDados from 'readline-sync';

let juros 
let diasDeAtraso 
let novoValorDivida 
let valorDaDivida
let valorJuros 

 console.log ('APLICAÇÃO DE JUROS')
    valorDaDivida = entradaDados.question ('informe o valor da divida ')
    valorDaDivida=Number(valorDaDivida)
    if (valorDaDivida>0){
    diasDeAtraso = entradaDados.question ('informe os dias de atraso')
    }
    if (diasDeAtraso==0){
        console.log ('sua divida esta em dia')
    }
    else if (diasDeAtraso>0 && diasDeAtraso<=15){  
        juros = 5
        valorJuros= (valorDaDivida/100)*juros
        novoValorDivida=valorDaDivida+valorJuros
        console.log('o novo valor da divida com juros de 5 % é:',novoValorDivida)
    }  
    else if (diasDeAtraso>15){
        juros = 10
        valorJuros= (valorDaDivida/100)*juros
        novoValorDivida=valorDaDivida+valorJuros
        console.log('o novo valor da divida com juros de 10% é:', novoValorDivida)
    }
    else {
        console.log('o valor digitado deve ser maior que 0')

    }
    
    //function getNewValue(val, dias){
    //    if(val<=0) return 'não tem divida'
    //    if(dias<=0) return 'divida em dia'
    //    const juros = dias<15 ? 5 : 10
    //    return 'o novo valor da divida é ' + (val+(val/100*juros))
    //}

    //console.log(getNewValue(entradaDados.question ('informe o valor da divida '),entradaDados.question ('informe os dias de atraso')))