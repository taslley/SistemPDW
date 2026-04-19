document.addEventListener('DOMContentLoaded', () => {
    const botaoEnviar = document.querySelector('#consulta button');

    if (botaoEnviar) {
        botaoEnviar.addEventListener('click', () => {

            const inputNome = document.querySelector('input[type="text"]');
            const inputEmail = document.querySelector('input[type="email"]');
            const valorNome = inputNome.value;
            const valorEmail = inputEmail.value;

            if (valorNome === '' || valorEmail === '') {
                alert('Por favor, preencha o Nome e o E-mail.');
                return;
            }
            
            window.location.href = "concluido.html";
        });
    }
});