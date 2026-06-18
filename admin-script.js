document.addEventListener("DOMContentLoaded", function() {
    const selectDia = document.getElementById("dia-destaque");
    const formAdmin = document.getElementById("form-admin");

    // Preenche o select do calendário de Fevereiro (01 a 28)
    for (let i = 1; i <= 28; i++) {
        let diaFormatado = i < 10 ? '0' + i : i;
        let option = document.createElement("option");
        option.value = diaFormatado;
        option.textContent = `Dia ${diaFormatado}`;
        if (i === 12) option.selected = true;
        selectDia.appendChild(option);
    }

    formAdmin.addEventListener("submit", function(event) {
        event.preventDefault();

        const diaSelecionado = selectDia.value;
        const linkEnquete = document.getElementById("link-enquete").value;
        const linkSpotify = document.getElementById("link-spotify").value;
        
        const bannerQuadraFile = document.getElementById("banner-quadra").files[0];
        const bannerAlmocoFile = document.getElementById("banner-almoco").files[0];

        // Objeto base para salvar as informações de texto
        const dadosAtualizados = {
            diaDestaque: diaSelecionado,
            enquete: linkEnquete,
            spotify: linkSpotify,
            bannerQuadraUrl: null,
            bannerAlmocoUrl: null
        };

        // Função auxiliar para converter imagens em String de leitura local (Base64)
        const lerImagem = (arquivo) => {
            return new Promise((resolve) => {
                if (!arquivo) return resolve(null);
                const reader = new FileReader();
                reader.onloadend = () => resolve(reader.result);
                reader.readAsDataURL(arquivo);
            });
        };

        // Processa as imagens e salva tudo junto
        Promise.all([lerImagem(bannerQuadraFile), lerImagem(bannerAlmocoFile)]).then(([quadraUrl, almocoUrl]) => {
            dadosAtualizados.bannerQuadraUrl = quadraUrl;
            dadosAtualizados.bannerAlmocoUrl = almocoUrl;

            // Salva a estrutura permanentemente no LocalStorage do navegador
            localStorage.setItem("dadosAgendaGrêmio", JSON.stringify(dadosAtualizados));

            alert("Agenda atualizada no sistema com sucesso! Abra o agenda.html para ver as mudanças.");
        });
    });
});