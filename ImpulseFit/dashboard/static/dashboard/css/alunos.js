
const modal = document.getElementById("modalAluno");
const abrir = document.getElementById("abrirFormulario");
const fechar = document.getElementById("fecharFormulario");
const cancelar = document.getElementById("cancelarFormulario");
const formulario = document.getElementById("formAluno");
const tabela = document.getElementById("listaAlunos");
const pesquisa = document.getElementById("pesquisaAluno");

// Abrir formulário
abrir.addEventListener("click", () => {
    modal.classList.add("aberto");
});

// Fechar formulário
function fecharModal() {
    modal.classList.remove("aberto");
}

fechar.addEventListener("click", fecharModal);
cancelar.addEventListener("click", fecharModal);

// Cadastrar aluno
formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nomeAluno").value.trim();
    const telefone = document.getElementById("telefoneAluno").value.trim();
    const plano = document.getElementById("planoAluno").value;
    const data = document.getElementById("dataAluno").value;

    if (!nome || !telefone || !plano || !data) {
        alert("Preencha todos os campos!");
        return;
    }

    if (tabela.querySelector(".sem-alunos")) {
        tabela.innerHTML = "";
    }

    const linha = document.createElement("tr");

    const valores = [
        nome,
        telefone,
        plano,
        new Date(data + "T12:00:00").toLocaleDateString("pt-BR"),
        "Ativo"
    ];

    valores.forEach(valor => {
        const coluna = document.createElement("td");
        coluna.textContent = valor;
        linha.appendChild(coluna);
    });

    // Botão excluir
    const acoes = document.createElement("td");
    const botaoExcluir = document.createElement("button");

    botaoExcluir.textContent = "Excluir";
    botaoExcluir.className = "btn-excluir";

    botaoExcluir.addEventListener("click", () => {
        linha.remove();

        if (tabela.children.length === 0) {
            tabela.innerHTML = `
                <tr>
                    <td colspan="6" class="sem-alunos">
                        Nenhum aluno cadastrado.
                    </td>
                </tr>
            `;
        }
    });

    acoes.appendChild(botaoExcluir);
    linha.appendChild(acoes);

    tabela.appendChild(linha);

    formulario.reset();
    fecharModal();

    alert("Aluno adicionado à lista!");
});

// Pesquisar alunos
pesquisa.addEventListener("input", () => {
    const termo = pesquisa.value.toLowerCase();

    tabela.querySelectorAll("tr").forEach(linha => {
        if (linha.querySelector(".sem-alunos")) return;

        const nome = linha.cells[0].textContent.toLowerCase();

        linha.style.display = nome.includes(termo) ? "" : "none";
    });
});
