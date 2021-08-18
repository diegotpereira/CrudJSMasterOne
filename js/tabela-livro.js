const tabelaLivro = (function($) {
    const TABELA_LIVRO_CORPO = $("#tabelaLivro tbody");

    function bookBuildTableRow(id) {
        const livro = {id: id, ...livroForm.getData()};
        const livroTpl = _.template($("#livroTemplate").html());

        return livroTpl(livro);
    }

    function adicionarNaTabela() {
        TABELA_LIVRO_CORPO.append(bookBuildTableRow(_nextId));
    }

    function _buscarLivroFileiraPorId(id) {
        return $("#tabelaLivro button[data-id = '" + id + "']").parents("tr")[0];
    }

    function atualizarLivroTabela(id) {
        const row = _buscarLivroFileiraPorId(id);
        const $row = $(row);

        $row.after(bookBuildTableRow());

        $row.remove();
    }

    return {
        adicionarNaTabela: adicionarNaTabela,
        atualizarLivroTabela: atualizarLivroTabela
    }
})(jQuery);