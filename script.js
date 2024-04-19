document.addEventListener("DOMContentLoaded", function() {
    // Capturando os botões pelo ID
    var botaoFormulario = document.getElementById("botaoFormulario");
    var botaoConvidados = document.getElementById("conferirConvidados"); // Corrigido o ID do botão
    // Adicionando evento de clique ao botão formulário
    botaoFormulario.addEventListener("click", function() {
		// Redirecionando para o formulário.html
        window.location.href = "formulario.html";
    });
   // Adicionando evento de clique ao botão confirmados
    botaoConvidados.addEventListener("click", function() {
        // Redirecionando para a página de resultados
        var senha = prompt("Digite a senha:");
        if (senha === "barbie123") {            
            window.location.href = "resultado.html";
        } else {
            alert("Senha incorreta!");
        }
    });
});
