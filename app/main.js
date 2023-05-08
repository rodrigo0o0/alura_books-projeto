let livros = [];

const endpointDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

//modo de manter uma moeda para cada país, nesse caso apenas Brasileira
const preco = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
});



async function getBuscaLivros(){
    const response  = await fetch(endpointDaApi);
    livros = await response.json();
    
    console.table(livros);
    let livrosComDesconto  = aplicarDesconto(livros);
    exibeLivrosNaTela(livrosComDesconto);



    // const map1 = jsonData.map((livro) => livro.preco += livro.preco * 0.1);
    // console.log(map1);


}


getBuscaLivros();



