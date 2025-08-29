function verificarResposta(inputId, respostaCorreta, proximaPagina) {
    const inputElement = document.getElementById(inputId);
    const feedbackElement = document.getElementById('feedback');
    const respostaDoUsuario = inputElement.value.toLowerCase().trim();

    if (respostaDoUsuario === respostaCorreta) {
        feedbackElement.textContent = 'Resposta correta! Prossiga com a sua jornada.';
        feedbackElement.style.color = '#2ea043';
        setTimeout(() => {
            window.location.href = proximaPagina;
        }, 1500); // Redireciona após 1.5 segundos
    } else {
        feedbackElement.textContent = 'Resposta incorreta. Tente novamente.';
        feedbackElement.style.color = '#f85149';
    }
}