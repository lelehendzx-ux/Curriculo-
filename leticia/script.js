const nome = document.querySelector("#nome");
const editar = document.querySelector("#editar");
const sair = document.querySelector("#sair");
const cidade = document.querySelector("#cidade");


editar.addEventListener("click", function () {
    const novoNome = prompt("Digite seu nome completo:");


    if (novoNome && novoNome.trim() !== "") {
        nome.textContent = novoNome.trim();
    }

    const novaCidade = prompt("Digite sua nova cidade:");

    if (novaCidade && novaCidade.trim() !== "") {
        cidade.textContent = "📍 " + novaCidade.trim();
    }
});

sair.addEventListener("click", function() {
    const resposta = confirm("Deseja sair do perfil?");

    if (resposta) {
        const confirmar = confirm("Tem certeza de que deseja sair?");

        if (confirmar) {
            alert("Você saiu do perfil!"); 
        }
    }
});