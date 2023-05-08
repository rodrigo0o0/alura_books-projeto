function aplicarDesconto(livros){
    const desconto = 0.3;
    let livrosDescontados = livros.map(livro =>{
        return{...livro, preco : livro.preco - (livro.preco * desconto) }
    })
    return livrosDescontados;
}