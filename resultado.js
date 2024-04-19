document.addEventListener("DOMContentLoaded", function() {
    // Recuperando os participantes armazenados no localStorage
    var participantes = JSON.parse(localStorage.getItem("participantes")) || [];

    // Separando participantes confirmados e não confirmados
    var confirmados = participantes.filter(function(participante) {
        return participante.confirmacao === "sim";
    });
    var naoConfirmados = participantes.filter(function(participante) {
        return participante.confirmacao === "nao";
    });

    // Exibindo os participantes confirmados e não confirmados
    exibirParticipantes(confirmados, "confirmados");
    exibirParticipantes(naoConfirmados, "naoConfirmados");

    // Capturando o botão limpar pelo ID
    var botaoLimpar = document.getElementById("botaoLimpar");

    // Adicionando evento de clique ao botão limpar
    botaoLimpar.addEventListener("click", function() {
        // Exibe um alerta de confirmação
        var confirmacao = confirm("Tem certeza que deseja apagar os dados?");

        // Verifica se o usuário confirmou a ação
        if (confirmacao) {
            limparStorage(); // Chama a função para limpar o localStorage
        } else {
            alert("Ufa! Não apagamos nada!"); // Exibe uma mensagem informando que nada foi apagado
        }
    });
});

function limparStorage() {
    localStorage.clear(); // Limpa o localStorage
    alert("Já era! Apagou tudo, não tem volta!"); // Exibe uma mensagem de alerta para confirmar que o localStorage foi limpo
}


function exibirParticipantes(participantes, elementoId) {
   var elemento = document.getElementById(elementoId);
    if (!elemento) {
        console.error("Elemento não encontrado com o ID:", elementoId);
        return; // Sair da função se o elemento não for encontrado
    }
	
    if (participantes.length === 0) {
        elemento.innerHTML = "<p>Nenhum participante</p>";
    } else {
        var html = "<table><tr><th>Nome</th><th>Telefone</th><th>Email</th></tr>";
        participantes.forEach(function(participante) {
            html += "<tr><td>" + participante.nome + "</td><td>" + participante.telefone + "</td><td>" + participante.email + "</td></tr>";
        });
        html += "</table>";
        elemento.innerHTML = html;
    }
}


