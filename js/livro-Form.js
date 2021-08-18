const livroForm = (function($){
    const LIVRO_TITULO = $("#livro_titulo");
    const LIVRO_AUTOR = $("#livro_autor");
    const LIVRO_EDITORA = $("#livro_editora");
    const LIVRO_ATUALIZA_BUTTON = $("#btnAtualizar");

    function limpar() {
        setData();
        LIVRO_TITULO.focus();
    }

    function hasErrors() {
        return LIVRO_TITULO.val() === null || LIVRO_TITULO.val() === '';
    }

    function getData() {
        return {
            titulo: LIVRO_TITULO.val(),
            autor: LIVRO_AUTOR.val(),
            editora: LIVRO_EDITORA.val(),
        };
    }

    function setData(titulo = '', autor = '', editora = '') {
        LIVRO_TITULO.val(titulo);
        LIVRO_AUTOR.val(autor);
        LIVRO_EDITORA.val(editora);
    }

    function setSubmitButtonText(str) {
        LIVRO_ATUALIZA_BUTTON.text(str);
    }

    function getSubmitButtonText() {
        return LIVRO_ATUALIZA_BUTTON.text();
    }

    return {
        limpar: limpar,
        hasErrors: hasErrors,
        getData: getData,
        setData: setData,
        setSubmitButtonText: setSubmitButtonText,
        getSubmitButtonText: getSubmitButtonText,
    };
})(jQuery);