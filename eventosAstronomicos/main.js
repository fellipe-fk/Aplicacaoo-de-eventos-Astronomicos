import colecaoChuvasDeMeteoros from "./dados/dados.js";
import {filtraChuvasMes, filtroChuvaDoisMes } from "./funcoes/logicaEventoMeteoro.js";

if(filtraChuvasMes.length > 0){
    console.log('CHUVAS QUE PODEM SER VISTAS HOJE\n');
    filtraChuvasMes(colecaoChuvasDeMeteoros);
}else {
    console.log('\nNão há chuvas passando hoje');
};

console.log('CHUVAS QUE PODEM SER VISTAS NOS PRÓXIMOS 2 MESES\n');
console.log(filtroChuvaDoisMes(colecaoChuvasDeMeteoros));