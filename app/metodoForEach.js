const sectionLivros = document.getElementById('livros');
const valorTotalElemento = document.getElementById('valor');




function exibeLivrosNaTela(livros_tela){
    sectionLivros.innerHTML = '';


    var valorTotal = calculaValorTotalDosLivros(livros_tela);
    valorTotalElemento.textContent = preco.format(valorTotal);
    livros_tela.forEach(livro => {
        
        var disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'  ;
           
        let novoLivro =  `<div class="livro">
        <img class=" ${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
        <h2 class="livro__titulo">
        ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">${preco.format(livro.preco)}</p>
        <div class="tags">
        <span class="tag">${livro.categoria}</span>
        </div>
        </div>`;
        sectionLivros.innerHTML += novoLivro;

    });
}
