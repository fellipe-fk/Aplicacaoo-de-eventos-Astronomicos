import colecaoChuvasDeMeteoros from "./dados/dados.js";
import imprimeListaDeChuvas from "./funcoes/funcoesInterface.js";
import {chuvasMeteorosHoje, chuvaMeteorosDoisMes } from "./funcoes/logicaEventoMeteoro.js";

const dataAtual = new Date();

const chuvasVisiveisHoje = colecaoChuvasDeMeteoros.filter((chuva) => chuvasMeteorosHoje(chuva,dataAtual));

const chuvasVisiveisHojeProximo2Mes =  colecaoChuvasDeMeteoros.filter((chuva) => chuvaMeteorosDoisMes(chuva, dataAtual));

if(chuvasVisiveisHoje.length > 0){
    let msg = "\nEncontramos ";
    msg += chuvasVisiveisHoje.length == 1
        ? '1 chuva de meteoros que pode ser vista hoje'
        : chuvasVisiveisHoje.length + ' chuvas de meteoros que podem ser vistas hoje';
        console.log(msg);

        imprimeListaDeChuvas(chuvasVisiveisHoje);
}else {
    console.log('\nNão há chuvas passando hoje');
};

console.log('\nCHUVAS QUE PODEM SER VISTAS NOS PRÓXIMOS 2 MESES\n');
console.log(imprimeListaDeChuvas(chuvasVisiveisHojeProximo2Mes));