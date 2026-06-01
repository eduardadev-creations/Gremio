let currentPage = "aluno"; // Página inicial é a do Aluno

// Função para alternar entre as páginas do Aluno e do Grêmio
function switchPage(page) {
    currentPage = page;
}

// 1. FUNÇÃO DE LOGIN DO ALUNO

function loginAluno() {
    // Captura os valores dos inputs da página do Aluno
    const nome = document.getElementById('nomeCompleto').value.trim();
    const matricula = document.getElementById('matricula').value.trim();
    const curso = document.getElementById('curso').value.trim();
    const serie = document.getElementById('serie').value.trim();

    // Validação: Verifica se algum campo ficou em branco
    if (nome === "" || matricula === "" || curso === "" || serie === "") {
        alert("Por favor, preencha todos os campos do Aluno!");
        return; 
    }

    // Validação: Garante que a matrícula seja numérica
    if (isNaN(matricula)) {
        alert("A matrícula do aluno deve conter apenas números.");
        return;
    }

    // Sucesso
    console.log("Aluno autenticado:", { nome, matricula, curso, serie });
<<<<<<< HEAD
    alert('Olá, ${nome}! Login de Aluno realizado com sucesso.');
=======
    alert("Olá, ${nome}! Login de Aluno realizado com sucesso.");
>>>>>>> 04bb56b38ca4304d506d84b5efc8e4f2aa071955
    switchPage("aluno");
}


// 2. FUNÇÃO DE LOGIN DO GRÊMIO

function loginGremio() {
    // Captura os valores dos inputs da página do Grêmio (incluindo o Cargo)
    const nome = document.getElementById('nomeCompleto').value.trim();
    const matricula = document.getElementById('matricula').value.trim();
    const curso = document.getElementById('curso').value.trim();
    const serie = document.getElementById('serie').value.trim();
    const cargo = document.getElementById('cargo').value.trim();

    // Validação: Verifica se todos os 5 campos foram preenchidos
    if (nome === "" || matricula === "" || curso === "" || serie === "" || cargo === "") {
        alert("Por favor, preencha todos os campos, incluindo o seu Cargo no Grêmio!");
        return;
    }

    // Validação: Garante que a matrícula seja numérica
    if (isNaN(matricula)) {
        alert("A matrícula do membro do grêmio deve conter apenas números.");
        return;
    }

    // Sucesso
    console.log("Membro do Grêmio autenticado:", { nome, matricula, curso, serie, cargo });
<<<<<<< HEAD
    alert('Bem-vindo, ${cargo} ${nome}! Login do Grêmio realizado com sucesso.');
=======
    alert("Bem-vindo, ${cargo} ${nome}! Login do Grêmio realizado com sucesso.");
>>>>>>> 04bb56b38ca4304d506d84b5efc8e4f2aa071955
    switchPage("gremio");
}