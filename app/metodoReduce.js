function calculaValorTotalDosLivros(lista_livros){
    listaLivrosDisponiveis = lista_livros.filter((livro) => {
        return livro.quantidade > 0;
    })
    return listaLivrosDisponiveis.reduce((acc, livro) => acc + livro.preco, 0);
}