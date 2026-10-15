// Animação para alternar entre Login e Cadastro
$(document).ready(function() {
    $("#botao-cadastrar").click(function() {
        $("#form-cadastrar").slideToggle("slow");
        $("#section-login").slideToggle("slow");
        $("#botao-cadastrar").hide();
    });
});