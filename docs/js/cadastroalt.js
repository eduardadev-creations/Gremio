// Busca os usuários já cadastrados no navegador
let usuariosCadastrados =
JSON.parse(localStorage.getItem("usuarios")) || [];

// Cadastro de Aluno
function cadastroAluno() {

const nome = document.getElementById("nomeCompleto").value.trim();
const matricula = document.getElementById("matricula").value.trim();
const curso = document.getElementById("curso").value.trim();
const serie = document.getElementById("serie").value.trim();

// Verifica se todos os campos foram preenchidos
if (!nome || !matricula || !curso || !serie) {
    alert("Preencha todos os campos.");
    return;
}

// Verifica se a matrícula contém apenas números
if (isNaN(matricula)) {
    alert("A matrícula deve conter apenas números.");
    return;
}

// Impede cadastro duplicado
const existe = usuariosCadastrados.some(
    usuario => usuario.matricula === matricula
);

if (existe) {
    alert("Esta matrícula já está cadastrada.");
    return;
}

// Cria o objeto do aluno
const novoAluno = {
    tipo: "aluno",
    nome,
    matricula,
    curso,
    serie
};

// Salva o aluno
usuariosCadastrados.push(novoAluno);

localStorage.setItem(
    "usuarios",
    JSON.stringify(usuariosCadastrados)
);

alert("Cadastro realizado com sucesso!");

// Redireciona para a tela de login
window.location.href = "loginAluno.html";

}

// Cadastro de membro do Grêmio
function cadastroGremio() {

const nome = document.getElementById("nomeCompleto").value.trim();
const matricula = document.getElementById("matricula").value.trim();
const curso = document.getElementById("curso").value.trim();
const serie = document.getElementById("serie").value.trim();
const cargo = document.getElementById("cargo").value.trim();

// Verifica se todos os campos foram preenchidos
if (!nome || !matricula || !curso || !serie || !cargo) {
    alert("Preencha todos os campos.");
    return;
}

// Verifica se a matrícula contém apenas números
if (isNaN(matricula)) {
    alert("A matrícula deve conter apenas números.");
    return;
}

// Impede cadastro duplicado
const existe = usuariosCadastrados.some(
    usuario => usuario.matricula === matricula
);

if (existe) {
    alert("Esta matrícula já está cadastrada.");
    return;
}

// Cria o objeto do membro
const novoMembro = {
    tipo: "gremio",
    nome,
    matricula,
    curso,
    serie,
    cargo
};

// Salva o membro do Grêmio
usuariosCadastrados.push(novoMembro);

localStorage.setItem(
    "usuarios",
    JSON.stringify(usuariosCadastrados)
);

alert("Cadastro realizado com sucesso!");

// Redireciona para o login do Grêmio
window.location.href = "loginGremio.html";

}