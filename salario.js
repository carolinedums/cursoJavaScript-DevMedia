import entraDados from 'readline-sync'
 

console.log('ESCOLHA UMA DAS ALTERNATIVAS')

console.log("\n")
console.log('1 - Listar os salárioso minímos de 2010 à 2020')
console.log("\n")
console.log('2 - Listar o índice IPCA de 2010 à 2020')
console.log("\n")
console.log('3 - Comparação entre o percentual de aumento salarial e o IPCA')
console.log("\n")

let lista_salarios = [
    { salario: 510.00, ano:2010},
    { salario:  545.00, ano:2011},
    { salario:  622.00, ano:2012},
    { salario:  678.00, ano:2013},
    { salario:  724.00, ano:2014},
    { salario:  788.00, ano:2015},
    { salario:  880.00, ano:2016},
    { salario:  937.00, ano:2017},
    { salario:  954.00, ano:2018},
    { salario:  998.00, ano:2019},
    { salario:  1045.00, ano:2020},
]

let lista_inflacao = [
    { inflacao: 5.91,  ano:2010},
    { inflacao: 6.50,  ano:2011},
    { inflacao: 5.84,   ano:2012},
    { inflacao: 5.91,	ano :2013},
    { inflacao: 6.41,   ano:2014},
    { inflacao: 10.67,	ano:2015},
    { inflacao: 6.29,	ano:2016},
    { inflacao: 2.95,	ano:2017},
    { inflacao: 3.75,	ano:2018},
    { inflacao: 4.31,	ano:2019},
    { inflacao: 4.52,	ano:2020},

]


var numero_escolhido=entraDados.question('Digite o numero de sua escolha:')
numero_escolhido=Number(numero_escolhido)

if(numero_escolhido > 3 || numero_escolhido === 0){
    console.log('Digite um numero válido de 1 à 3!')
} else if (numero_escolhido===1){
    for (let dado of lista_salarios){
    console.log('salario: ' + dado.salario.toFixed(2) + 'R$.............' + 'ano.....' + dado.ano )
    console.log("\n")
    }
} else if (numero_escolhido===2){
    for (let dado of lista_inflacao){
        console.log('Inflação: '  + dado.inflacao + "%............"  + 'ano.....' + dado.ano )
    }
} else if (numero_escolhido===3){
        if(lista_inflacao.length === lista_salarios.length){

            for (let c = 1; c <  lista_salarios.length; c++){
                let ano = lista_inflacao[c].ano
                let inflacao = lista_inflacao[c].inflacao
                let salario = lista_salarios[c].salario
                let salarioanterior= lista_salarios[c-1].salario
                let diferenca = salario-salarioanterior
                let crescimento = (diferenca / salarioanterior)*100
                    console.log('ano:  '+ ano + ":...." + 'crescimento:  ' + crescimento.toFixed(2) + ':%...'+ 'salario:' + salario + '    inflação: '+  inflacao)
            }
        }
    }
