import colecaoChuvasDeMeteoros from "../dados/dados.js";

function chuvasMeteorosHoje(chuva,dataAtual){
    const anoAtual = dataAtual.getFullYear();

    const dataInicio = new Date(chuva.inicio + '/' + anoAtual);
    const dataFim = new Date(chuva.fim +'/'+ anoAtual);

    if(dataInicio.getMonth() + 1 > dataFim.getMonth + 1){
        const anoFim = dataFim.getFullYear();
        dataFim.setFullYear(anoFim + 1);
    }
    return (dataAtual >= dataInicio && dataAtual <= dataFim);
};



function chuvaMeteorosDoisMes(chuva,data){
    const dataAtual = data;
    const anoAtual = dataAtual.getFullYear();
    const dataInicio = new Date(chuva.inicio + '/' + anoAtual);
    const dataFim = new Date(dataAtual);
    
    if ( dataAtual.getMonth() + 1 > dataInicio.getMonth() + 1 ) {
        const anoFinal = dataInicio.getFullYear();
        dataInicio.setFullYear(anoFinal +1);
    };

    dataFim.setMonth( dataFim.getMonth() + 2 );

    return ( dataAtual < dataInicio && dataInicio < dataFim );
};

const dataAtual = new Date();

const chuvasVisiveisHoje = colecaoChuvasDeMeteoros.filter((chuva) => chuvasMeteorosHoje(chuva,dataAtual));

const chuvasVisiveisProximos2Meses = colecaoChuvasDeMeteoros.filter(
    (chuva)=> chuvaMeteorosDoisMes(chuva, dataAtual)
);

console.log(chuvasVisiveisProximos2Meses)