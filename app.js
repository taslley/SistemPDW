document.addEventListener('DOMContentLoaded', () => {
    const botaoEnviar = document.querySelector('#consulta button');

    if (botaoEnviar) {
        botaoEnviar.addEventListener('click', () => {
            // CAPTURA (Verifique se esses seletores existem no seu HTML)
            const inputNome = document.querySelector('input[type="text"]');
            const inputEmail = document.querySelector('input[type="email"]');

            // EXTRAÇÃO DOS VALORES
            const valorNome = inputNome.value;
            const valorEmail = inputEmail.value;

            // VALIDAÇÃO
            if (valorNome === '' || valorEmail === '') {
                alert('Por favor, preencha o Nome e o E-mail.');
                return;
            }
            
            // REDIRECIONAMENTO
            window.location.href = "concluido.html";
        });
    }
});