// Tenta carregar os usuários já cadastrados ou inicia um array vazio se não houver nenhum
let usuariosCadastrados = JSON.parse(localStorage.getItem('usuarios')) || [];

// 1. TELA DE CADASTRO (cadastroAluno.html / cadastroGremio.html)


// Função acionada pelo botão "Cadastrar" no HTML do Aluno
function cadastroAluno() {
    const nome = document.getElementById('nomeCompleto').value.trim();
    const matricula = document.getElementById('matricula').value.trim();
    const curso = document.getElementById('curso').value.trim();
    const serie = document.getElementById('serie').value.trim();

    // Validações básicas
    if (nome === "" || matricula === "" || curso === "" || serie === "") {
        alert("Por favor, preencha todos os campos para se cadastrar!");
        return;
    }

    if (isNaN(matricula)) {
        alert("A matrícula do aluno deve conter apenas números.");
        return;
    }

    // Verifica se a matrícula já existe no banco local
    const usuarioExiste = usuariosCadastrados.some(user => user.matricula === matricula);
    if (usuarioExiste) {
        alert("Esta matrícula já está cadastrada no sistema!");
        return;
    }

    // Salva o novo aluno
    const novoAluno = {
        tipo: "aluno",
        nome: nome,
        matricula: matricula,
        curso: curso,
        serie: serie
    };

    usuariosCadastrados.push(novoAluno);
    localStorage.setItem('usuarios', JSON.stringify(usuariosCadastrados));

    alert(`Aluno  + '${nome}' + ' cadastrado com sucesso! Redirecionando para o login...'`);

    // REDIRECIONA AUTOMATICAMENTE PARA A TELA DE LOGIN
    window.location.href = "loginAluno.html";
    
    limparCampos(['nomeCompleto', 'matricula', 'curso', 'serie']);
}

// Função para a página de cadastro do Grêmio (cadastroGremio.html)
function cadastroGremio() {
    const nome = document.getElementById('nomeCompleto').value.trim();
    const matricula = document.getElementById('matricula').value.trim();
    const curso = document.getElementById('curso').value.trim();
    const serie = document.getElementById('serie').value.trim();
    const cargo = document.getElementById('cargo').value.trim(); // Campo extra do grêmio

    if (nome === "" || matricula === "" || curso === "" || serie === "" || cargo === "") {
        alert("Por favor, preencha todos os campos, incluindo o seu Cargo!");
        return;
    }

    if (isNaN(matricula)) {
        alert("A matrícula deve conter apenas números.");
        return;
    }

    const usuarioExiste = usuariosCadastrados.some(user => user.matricula === matricula);
    if (usuarioExiste) {
        alert("Esta matrícula já está cadastrada!");
        return;
    }

    const novoMembro = {
        tipo: "gremio",
        nome: nome,
        matricula: matricula,
        curso: curso,
        serie: serie,
        cargo: cargo
    };

    usuariosCadastrados.push(novoMembro);
    localStorage.setItem('usuarios', JSON.stringify(usuariosCadastrados));

    alert(`Membro do Grêmio (${cargo} ${nome}) cadastrado com sucesso!`);
    limparCampos(['nomeCompleto', 'matricula', 'curso', 'serie', 'cargo']);
}

// 2. TELA DE LOGIN (loginAluno.html / loginGremio.html)


// Função para logar o Aluno
function loginAluno() {
    const nome = document.getElementById('nomeCompleto').value.trim();
    const matricula = document.getElementById('matricula').value.trim();

    if (nome === "" || matricula === "") {
        alert("Por favor, preencha Nome e Matrícula para entrar!");
        return;
    }

    const alunoEncontrado = usuariosCadastrados.find(
        user => user.matricula === matricula && user.nome.toLowerCase() === nome.toLowerCase() && user.tipo === "aluno"
    );

    if (alunoEncontrado) {
        alert('Olá, ${alunoEncontrado.nome}! Login realizado com sucesso.');
    } else {
        alert("Aluno não encontrado! Você já realizou o seu cadastro?");
    }
}

// Função para logar o Membro do Grêmio
function loginGremio() {
    const nome = document.getElementById('nomeCompleto').value.trim();
    const matricula = document.getElementById('matricula').value.trim();

    if (nome === "" || matricula === "") {
        alert("Por favor, preencha Nome e Matrícula!");
        return;
    }

    const membroEncontrado = usuariosCadastrados.find(
        user => user.matricula === matricula && user.nome.toLowerCase() === nome.toLowerCase() && user.tipo === "gremio"
    );

    if (membroEncontrado) {
        alert('Bem-vindo, ' + membroEncontrado.cargo + ' ' + membroEncontrado.nome + '!');
    } else {
        alert("Membro do Grêmio não encontrado! Verifique os dados ou cadastre-se.");
    }
}

// 3. FUNÇÃO AUXILIAR: limparCampos
// A função recebe uma lista (Array) contendo os IDs dos elementos HTML
function limparCampos(ids) {
    
    // O forEach percorre essa lista de IDs, um por um
    ids.forEach(id => {
        
        // document.getElementById busca o elemento na página usando o ID atual
        const elemento = document.getElementById(id);
        
        // O 'if' garante que o elemento realmente existe na página antes de tentar limpá-lo
        // Se ele existir, o .value = "" apaga qualquer texto que esteja digitado nele
        if (elemento) elemento.value = "";
    });
}