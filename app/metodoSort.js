const btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco');


btnOrdenarPorPreco.addEventListener('click', ordernarLivrosPorPreco);

function ordernarLivrosPorPreco(){
    console.log('entrou na funcao ordernarLivrosPorPreco')
    const livrosOrdenados = livros.sort((a,b) => a.preco - b.preco);
    exibeLivrosNaTela(livrosOrdenados);
}

