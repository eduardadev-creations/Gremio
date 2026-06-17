// Tenta carregar os usuários já cadastrados ou inicia um array vazio se não houver nenhum
let usuariosCadastrados = JSON.parse(localStorage.getItem('usuarios')) || [];

// 1. TELA DE CADASTRO (cadastroAluno.html / cadastroGremio.html)


// Função acionada pelo botão "Cadastrar" no HTML do Aluno
async function cadastrarAluno() {
    const nome = document.getElementById('nomeCompleto').value.trim();
    const matricula = document.getElementById('matricula').value.trim();
    const curso = document.getElementById('curso').value.trim();
    const serie = document.getElementById('serie').value.trim();
    const cargo = document.getElementById('cargo').value.trim();
    if (
        nome === '' ||
        matricula === '' ||
        curso === '' ||
        serie === ''
    ) {
        alert('Preencha todos os campos.');
        return;
    }
    try {
        const resposta = await fetch(
            'http://localhost:3000/cadastrar',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nome,
                    matricula,
                    curso,
                    serie
                })
            }
        );
        const dados = await resposta.json();

        if (resposta.ok) {

            alert(dados.mensagem);

            window.location.href =
                'loginAluno.html';
        } else {

            alert(dados.erro);
        }
    } catch (erro) {
        console.error(erro);
        alert('Erro ao conectar com o servidor.');
    }
}

// Função para a página de cadastro do Grêmio (cadastroGremio.html)
function cadastroGremio() { const nome = document.getElementById('nomeCompleto').value.trim();
    const matricula = document.getElementById('matricula').value.trim();
    const curso = document.getElementById('curso').value.trim();
    const serie = document.getElementById('serie').value.trim();
    if (
        nome === '' ||
        matricula === '' ||
        curso === '' ||
        serie === ''
    ) {
        alert('Preencha todos os campos.');
        return;
    }
    try {
        const resposta = await fetch(
            'http://localhost:3000/cadastrar',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nome,
                    matricula,
                    curso,
                    serie
                })
            }
        );
        const dados = await resposta.json();

        if (resposta.ok) {

            alert(dados.mensagem);

            window.location.href =
                'loginAluno.html';
        } else {

            alert(dados.erro);
        }
    } catch (erro) {
        console.error(erro);
        alert('Erro ao conectar com o servidor.');
    }}

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
        alert(`Olá, ${alunoEncontrado.nome}! Login realizado com sucesso.`);
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
        alert(`Bem-vindo, ${membroEncontrado.cargo} ${membroEncontrado.nome}!`);
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