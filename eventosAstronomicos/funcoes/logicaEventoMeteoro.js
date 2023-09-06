import colecaoChuvasDeMeteoros from "../dados/dados.js";

function filtraChuvasMes (colecaoChuvasDeMeteoro, dataAtual){
    const colecaoMeteorosHoje = [];
    dataAtual = new Date();

    let validaChuvaHoje = false;
    let dia = dataAtual.getDate();
    dia = dia < 10? "0"+ dia:dia;

    let mes = dataAtual.getMonth() + 1;
    mes = mes < 10? "0" + mes:mes;

    const dataAtualizada = `${dataAtual.getFullYear()}/${mes}/${dia}`;

    colecaoChuvasDeMeteoro.forEach((item) => {
       let inicio = `${dataAtual.getFullYear()}/${item.inicio}`;
       let fim = `${dataAtual.getFullYear()}/${item.fim}`;

       if(inicio > fim){
            fim = `${dataAtual.getFullYear() + 1}/${item.fim}`;
       };

       if(dataAtualizada >= inicio && dataAtualizada <= fim){

            // const chuvaHoje = {
            //     nome: item.nome,
            //     inicio: inicio,
            //     fim:fim,
            //     pico:item.pico,
            //     ascencao:item.ascencao,
            //     declinacao:item.declinacao,
            //     velocidade:item.velocidade,
            //     thz:item.thz,
            //     intensidade:item.intensidade
            // };
            // colecaoMeteorosHoje.push(chuvaHoje);

            console.log(`chuvas que podem ser vista hoje ${item.nome}`);
            validaChuvaHoje = true;
       }
    });
};
filtraChuvasMes(colecaoChuvasDeMeteoros);