// Busca os usuários cadastrados
let usuariosCadastrados =
JSON.parse(localStorage.getItem("usuarios")) || [];

// Login do aluno
function loginAluno() {

const nome = document.getElementById("nomeCompleto").value.trim();
const matricula = document.getElementById("matricula").value.trim();

// Verifica se os campos foram preenchidos
if (!nome || !matricula) {
    alert("Preencha Nome e Matrícula.");
    return;
}

// Procura o aluno cadastrado
const aluno = usuariosCadastrados.find(usuario =>
    usuario.tipo === "aluno" &&
    usuario.nome.toLowerCase() === nome.toLowerCase() &&
    usuario.matricula === matricula
);

// Caso não encontre
if (!aluno) {
    alert("Aluno não encontrado.");
    return;
}

// Salva quem está logado
localStorage.setItem(
    "usuarioLogado",
    JSON.stringify(aluno)
);

alert(`Bem-vindo(a), ${aluno.nome}!`);

// Envia para a página inicial
window.location.href = "inicio.html";

}

// Login do Grêmio
function loginGremio() {

const nome = document.getElementById("nomeCompleto").value.trim();
const matricula = document.getElementById("matricula").value.trim();

// Verifica se os campos foram preenchidos
if (!nome || !matricula) {
    alert("Preencha Nome e Matrícula.");
    return;
}

// Procura o membro do Grêmio
const membro = usuariosCadastrados.find(usuario =>
    usuario.tipo === "gremio" &&
    usuario.nome.toLowerCase() === nome.toLowerCase() &&
    usuario.matricula === matricula
);

// Caso não encontre
if (!membro) {
    alert("Membro do Grêmio não encontrado.");
    return;
}

// Salva quem está logado
localStorage.setItem(
    "usuarioLogado",
    JSON.stringify(membro)
);

alert(`Bem-vindo(a), ${membro.cargo} ${membro.nome}!`);

// Envia para o painel administrativo
window.location.href = "controleGremio.html";

}