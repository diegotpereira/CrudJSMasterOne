
   
        var _row = null;

        var _nextId = 1;

        var _activeId = 0;

        $(document).ready(function () {
            livroAdd();
        });
        function livroAdd() {

            if ($("#tabelaLivro tbody").length == 0) {
                $("#tabelaLivro").append("<tbody></tbody>");
            }
            // Adiciona um livro na tabela
            $("#tabelaLivro tbody").append(
                "<tr>" +
                "<td>Javascript Development - Crud com javascript puro</td>" +
                "<td>Diego TPereira</td>" +
                "<td>DTP Software</td>" +
                "</tr>"
            );
        }

        function atualizarLivro() {
            if ($("#livro_titulo").val() != null & $("#livro_titulo").val() != '') {
                if ($("#btn_atualizar").text() == "Atualizar") {
                    atualizarLivroTabela(_activeId);
                }else{
                    adicionarLivroTabela();
                }

                limparFormulario();

                $("#livro_titulo").focus();
            }
        }

        function adicionarLivroTabela() {
        
            $("#tabelaLivro tbody").append(
                "<tr>" +
                    "<td>" + $("#livro_titulo").val() + "</td>" +
                    "<td>" + $("#livro_autor").val() + "</td>" +
                    "<td>" + $("#livro_editora").val() + "</td>" +
                    "<td>" + 
                        "<button type='button' " +
                        "onclick='mostrarLivro(this);' " +
                        "class='btn btn-default'>" +
                        "<span class='glyphicon glyphicon-edit'></span>" +
                        "</button>" +
                    "</td>" +        
                    "<td>" +
                        "<button type='button' " +
                        "onclick='excluirLivro(this);' " +
                        "class='btn btn-default'>" +
                        "<span class='glyphicon glyphicon-remove'></span>" +
                        "</button>" +
                    "</td>" +    
                "</tr>"    
             );

             if ($("#tabelaLivro tbody").length == 0) {
                $("#tabelaLivro").append("<tbody></tbody>");
            }

            $("#tabelaLivro tbody").append(bookBuildTableRow(_nextId));

            _nextId += 1;
        }

        function limparFormulario() {
            $("#livro_titulo").val("");
            $("#livro_autor").val("");
            $("#livro_editora").val("");
        }

        function excluirLivro(btn_excluir) {
            $(btn_excluir).parents("tr").remove();
        }

        function mostrarLivro(btn_editar) {
            _row = $(btn_editar).parents("tr");
            var cols = _row.children("td");
            $("#livro_titulo").val($(cols[0]).text());
            $("#livro_autor").val($(cols[1]).text());
            $("#livro_editora").val($(cols[2]).text());

            $("#btn_atualizar").text("Atualizar");
        }

        function atualizarLivroTabela() {

            var row = $("#tabelaLivro button[data-id = '" + id + "']").parents("tr")[0];
            
            $(_row).after(bookBuildTableRow());

            $(_row).remove();

            limparFormulario();

            $("#btn_atualizar").text("Adicionar Livro");
        }

        function bookBuildTableRow(id) {
            var row = "<tr>" +
                "<td>" + $("#livro_titulo").val() + "</td>" +
                "<td>" + $("#livro_autor").val() + "</td>" +
                "<td>" + $("#livro_editora").val() + "</td>" +
                "<td>" +
                "<button type='button' " +
                    "onclick='mostrarLivro(this);' " +
                    "class='btn btn-default'" +
                    "data-id='" + id + "'>" +
                    "<span class='glyphicon glyphicon-edit'></span>" +
                "</button>" +
                "</td>" +
                "<td>" + 
                    "<button type='button' " +
                    "onclick='excluirLivro(this);' " +
                    "class='btn btn-default'" +
                    "data-id='" + id + "'>" +
                    "<span class='glyphicon glyphicon-remove'></span>" +
                    "</button>" +
                "</td>" +
             "</tr>"
             
             return row;
        } 

        function mostrarLivro(btn_editar) {
            var row = $(btn_editar).parents("tr");
            var cols = row.children("td");

            _activeId = $($(cols[3]).children("button")[0]).data("id");

            $("#livro_titulo").val($(cols[0]).text());
            $("#livro_autor").val($(cols[1]).text());
            $("#livro_editora").val($(cols[2]).text());

            $("#btn_atualizar").text("Atualizar");
        }
