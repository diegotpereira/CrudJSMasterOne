// Próximo ID para adicionar um novo livro
let _nextId = 1;

// ID do livro que está sendo editado
let _activedId = 0;

const LIVRO_FORM = $("#livro-form");
const TABELA_LIVRO = $("#tabelaLivro");

function eventoLivroEdit() {
    const row = $(this).parents("tr");
    const cols = row.children("td");

    _activedId = $($(cols[3]).children("button")[0]).data("id");

    livroForm.setData($(cols[0]).text(), $(cols[1]).text(), $(cols[2]).text());

    livroForm.setSubmitButtonText("Atualizar");
}

function eventoLivroExcluirClick() {
    $(this).parents("tr").remove();
}

function eventoLivroEnviar(e) {
    e.preventDefault();

    if (livroForm.hasErrors()) {
        return;
    }

    if (livroForm.getSubmitButtonText() === "Atualizar") {
        tabelaLivro.atualizarLivroTabela(_activedId);
        livroForm.setSubmitButtonText("Adicionar Livro");
    } else {
        tabelaLivro.adicionarNaTabela(_activedId);
        _nextId += 1;
    }

    livroForm.limpar();
}

TABELA_LIVRO.on('click', '.livro-edit', eventoLivroEdit);
TABELA_LIVRO.on('click', '.livro-excluir', eventoLivroExcluirClick);
LIVRO_FORM.on('submit', eventoLivroEnviar);