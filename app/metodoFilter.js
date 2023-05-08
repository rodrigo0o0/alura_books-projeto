const botoes = document.querySelectorAll('.btn');

botoes.forEach((botao) => {
    if(botao.value){
        botao.addEventListener('click', () => {
                filtraCategoria(botao.value)}
            
            );
        
    }
})




function filtraCategoria(categoria){
    console.log(typeof(livros))
    let livrosFiltrados = livros.filter((livro) => {
        return livro.categoria == categoria;
    });

    exibeLivrosNaTela(livrosFiltrados);
    console.log(livrosFiltrados);
}

const botaoDisponiveis = document.getElementById('btnLivrosDisponiveis');

botaoDisponiveis.addEventListener('click', filtrarDisponiveis);

function filtrarDisponiveis(){
    let livrosDisponiveis = livros.filter((livro) => livro.quantidade > 0);
    exibeLivrosNaTela(livrosDisponiveis);
}