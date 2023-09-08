function filtraChuvasMes (colecaoChuvasDeMeteoro, dataAtual){
    dataAtual = new Date();

    const ano = dataAtual.getFullYear();
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const dia = String(dataAtual.getDate()).padStart(2, '0');

    const dataAtualizada = `${ano}/${mes}/${dia}`;
    colecaoChuvasDeMeteoro.forEach((item) => {
       let inicio = `${ano}/${item.inicio}`;
       let fim = `${ano}/${item.fim}`;

       if(inicio > fim){
            fim = `${ano + 1}/${item.fim}`;
       };

       if(dataAtualizada >= inicio && dataAtualizada <= fim){
            console.log(`nome: ${item.nome}\ninicio: ${inicio}\nfim: ${fim}\npico: ${item.pico}\nascensao: ${item.ascensao}\ndeclinacao: ${item.declinacao}\nvelocidade: ${item.velocidade}\nthz: ${item.thz}\nintensidade: ${item.intensidade}\n`);
       };
    });
};


function filtroChuvaDoisMes (colecaoChuvasDeMeteoro, dataAtual){
    dataAtual = new Date();

    const ano = dataAtual.getFullYear();
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const dia = String(dataAtual.getDate()).padStart(2, '0');

    const dataFormatada = `${ano}/${mes}/${dia}`;

    colecaoChuvasDeMeteoro.forEach((item) => {
        let inicio = `${ano}/${item.inicio}`;
        let fim = `${ano}/${item.fim}`;


        if(dataFormatada > inicio){
            inicio = `${ano + 1}/${item.inicio}`;
        }

        const doisMes = String(dataAtual.getMonth() + 3).padStart(2, '0');
        const day = String(dataAtual.getDate()).padStart(2, '0');

        const dataDaquiDoisMes = `${dataAtual.getFullYear()}/${doisMes}/${day}`;

        if(dataFormatada < inicio && inicio < dataDaquiDoisMes){
            console.log(`${item.nome}\ninicio: ${inicio}\nfim: ${fim}\npico: ${item.pico}\nascencao: ${item.ascencao}\ndeclinacao: ${item.declinacao}\nvelocidade: ${item.velocidade}\nthz: ${item.thz}\nintensidade: ${item.intensidade}\n`);
        };   
    });
};

//em teste

export function inverteMesAno (data) {
    const dataInvertidada = data.split('/');

    return dataInvertidada[1] + '/' + dataInvertidada[0];
};

export function retornaIntensidade  (intensidade){
    let novaIntensidade = '1 (Fraca)';

    if ( intensidade.indexOf('Forte') >= 0 ) {
        novaIntensidade = '3 (Forte)';
    } else if ( intensidade.indexOf('Média') >= 0 ) {
        novaIntensidade = '2 (Média)';
    } else if (  intensidade.indexOf('Irregular') >= 0 ) {
        novaIntensidade = '(Irregular)';
    }

    return novaIntensidade;
};

export const retornaHemisferio = (declinacao) => declinacao >= 0 ? 'Norte' : 'Sul';

export {filtraChuvasMes,filtroChuvaDoisMes};

