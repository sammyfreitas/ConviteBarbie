document.addEventListener("DOMContentLoaded", function() {
    // Capturando o formulário
    var formulario = document.getElementById("confirmacaoForm");

    // Adicionando evento de envio ao formulário
    formulario.addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Obtendo os valores dos campos do formulário
        var nome = document.getElementById("nome").value;
        var telefone = document.getElementById("telefone").value;
        var email = document.getElementById("email").value;
        var confirmacao = document.getElementById("confirmacao").value;

        // Criando um objeto com os dados do participante
        var participante = {
            nome: nome,
            telefone: telefone,
            email: email,
            confirmacao: confirmacao
        };

        // Salvando os dados em localStorage
        var participantes = JSON.parse(localStorage.getItem("participantes")) || [];
        participantes.push(participante);
        localStorage.setItem("participantes", JSON.stringify(participantes));
		alert("Confirmação recebida! Retornando à página principal.");
        // Redirecionando para a página de resultados
        window.location.href = "index.html";
    });
});
