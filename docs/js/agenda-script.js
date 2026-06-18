document.addEventListener("DOMContentLoaded", function() {
    // 1. Recupera as informações salvas pelo admin no LocalStorage
    const dadosSalvos = localStorage.getItem("dadosAgendaGrêmio");

    if (dadosSalvos) {
        const dados = JSON.parse(dadosSalvos);

        // 2. Atualiza o Dia em Destaque no Calendário
        if (dados.diaDestaque) {
            // Remove o destaque do dia 12 padrão
            const diaDestaqueAntigo = document.querySelector(".dia-mes.dia-destaque");
            if (diaDestaqueAntigo) {
                diaDestaqueAntigo.classList.remove("dia-destaque");
            }

            // Procura todos os blocos de dias e destaca o novo dia escolhido
            const todosOsDias = document.querySelectorAll(".dia-mes");
            todosOsDias.forEach(dia => {
                if (dia.textContent.trim() === dados.diaDestaque) {
                    dia.classList.add("dia-destaque");
                }
            });
        }

        // 3. Atualiza o Link ou Pergunta da Enquete
        if (dados.enquete) {
            const enqueteBox = document.querySelector(".enquete-box-branca");
            if (enqueteBox) {
                enqueteBox.innerHTML = `<div style="padding: 10px; font-size: 0.8rem; font-weight: bold; color: #5d4d00; text-align: center;">${dados.enquete}</div>`;
            }
        }

        // 4. Atualiza o Link do Spotify
        if (dados.spotify) {
            const btnSpotify = document.querySelector(".btn-spotify");
            if (btnSpotify) {
                btnSpotify.href = dados.spotify;
            }
        }

        // 5. Atualiza os Banners (Caso tenha salvo em formato de texto/imagem base64)
        if (dados.bannerQuadraUrl) {
            const bannerQuadra = document.querySelectorAll(".banner-placeholder")[0];
            if (bannerQuadra) {
                bannerQuadra.style.backgroundImage = `url('${dados.bannerQuadraUrl}')`;
                bannerQuadra.style.backgroundSize = "cover";
                bannerQuadra.style.backgroundPosition = "center";
                bannerQuadra.textContent = ""; // Limpa a palavra "banner"
            }
        }

        if (dados.bannerAlmocoUrl) {
            const bannerAlmoco = document.querySelectorAll(".banner-placeholder")[1];
            if (bannerAlmoco) {
                bannerAlmoco.style.backgroundImage = `url('${dados.bannerAlmocoUrl}')`;
                bannerAlmoco.style.backgroundSize = "cover";
                bannerAlmoco.style.backgroundPosition = "center";
                bannerAlmoco.textContent = ""; // Limpa a palavra "banner"
            }
        }
    }
});