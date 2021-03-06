function AjaxModal() {
    $(document).ready(function () {
        $(function () {
            $.ajaxSetup({ cache: false });

            $("a[data-modal]").on("click",
                function (e) {
                    $('#myModalContent').load(this.href, function () {
                        $('#myModal').modal({
                            keyboard: true
                        },
                            'show');
                        bindForm(this);
                    });
                    return false;
                });
        });

        function bindForm(dialog) {
            $('form', dialog).submit(function () {
                $.ajax({
                    url: this.action,
                    type: this.method,
                    data: $(this).serialize(),
                    success: function (result) {
                        if (result.success) {
                            $('#myModal').modal('hide');
                            $('#EnderecoTarget').load(result.url);
                        } else {
                            $('#myModalContent').html(result);
                            bindForm(dialog);
                        }
                    }
                });
                return false;
            });
        }
    });

}

function BuscaCep() {
    $(documento).ready(function () {
        function limpa_formulario_cep() {
            $('#Endereco_Logradouro').val("");
            $('#Endereco_Bairro').val("");
            $('#Endereco_Cidade').val("");
            $('#Endereco_Estado').val("");

        }

        $("#Endereco_Cep").blur(function () {
            var cep = $(this).val().replace(/\D/g, '');

            if (cep != '') {
                var validacaocep = /^[0-9]{8}$/;

                if (validacaocep.test(cep)) {
                    $("#Endereco_Logradouro").val("...");
                    $("#Endereco_Bairro").val("...");
                    $("#Endereco_Cidade").val("...");
                    $("#Endereco_Estado").val("...");

                    $.getJSON("https://viacep.com.br/ws/" + cep + "/json/?callback=?",
                        function (dados) {
                            if (!("erro" in dados)) {
                                $("#Endereco_Logradouro").val(dados.logradouro);
                                $("#Endereco_Bairro").val(dados.bairro);
                                $("#Endereco_Cidade").val(dados.cidade);
                                $("#Endereco_Estado").val(dados.estado);
                            }
                            else {
                                limpa_formulario_cep();
                                alert("Cep não encontrado.");
                            }
                        });
                }
                else {
                    limpa_formulario_cep();
                    alert("Formato de Cep inválido.");
                }
            }
            else {
                limpa_formulario_cep();
            }
        });
    });
}

$(document).ready(() => {
    $("#msg_box").fadeOut(2500);
})