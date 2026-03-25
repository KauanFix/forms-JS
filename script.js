const form = document.getElementById('formulario');

form.addEventListener('submit', function (event) {

    event.preventDefault();

    let valido = true;

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;

    document.getElementById('erroNome').textContent = '';
    document.getElementById('erroEmail').textContent = '';
    document.getElementById('erroSenha').textContent = '';

    if (nome.length < 3) {
        document.getElementById('erroNome').textContent = 'Nome deve ter no mínimo 3 letras'

        valido = false;
    }

    if (!email.includes('@')) {

        document.getElementById('erroEmail').textContent = 'Deve ter um @ no campo email'

        valido = false;

    }

    if (senha.length < 6) {
        document.getElementById('erroSenha').textContent = 'Senha deve ter no mínimo 7 caracteres'

        valido = false;
    }

    if (valido) {

        let resultado = document.getElementById('resultado')

        resultado.innerHTML = `
        Dados enviados: <br>
        Nome: ${nome} <br> 
        Email: ${email} <br> 
        Senha: ${senha} <br>
        `;

        form.reset();

    }

})

