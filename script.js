const form = document.getElementById('formulario');

form.addEventListener('submit', function (event) {

    event.preventDefault();

    let valido = true;

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let cpf = document.getElementById('cpf').value;
    let idade = document.getElementById('idade').value;
    let cidade = document.getElementById('cidade').value;
    let moradia = document.getElementsByName('Moradia').value;
    let quintal = document.getElementsByName('Quintal').value;
    let pet = document.getElementsByName('Pet').value;
    let sozinho = document.getElementById('sozinho').value;
    let motivo = document.getElementById('motivo').value;
    let termoUso = document.getElementById('termoUso').value;

    document.getElementById('erroNome').textContent = '';
    document.getElementById('erroEmail').textContent = '';
    document.getElementById('erroTel').textContent = '';
    document.getElementById('erroCpf').textContent = '';
    document.getElementById('erroIdade').textContent = '';
    document.getElementById('erroCidade').textContent = '';
    document.getElementById('erroMoradia').textContent = '';
    document.getElementById('erroQuintal').textContent = '';
    document.getElementById('erroPet').textContent = '';
    document.getElementById('erroSozinho').textContent = '';
    document.getElementById('erroMotivo').textContent = '';
    document.getElementById('erroTermo').textContent = '';

    if (nome.length < 3) {
        document.getElementById('erroNome').textContent = 'Nome deve ter no mínimo 3 letras'

        valido = false;
    }

    if (!email.includes('@')) {

        document.getElementById('erroEmail').textContent = 'Deve ter um @ no campo email'

        valido = false;

    }

    if (telefone.length < 8) {
        document.getElementById('erroTel').textContent = 'O telefone deve ter no mínimo 8 digitos'

        valido = false;
    }

    if (idade < 18) {
        document.getElementById('erroIdade').textContent = 'Você precisa ser maior de idade para adotar um cãozinho'

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
const radiosMoradia = document.querySelectorAll('input[name="Moradia"]');
const permissao = document.getElementById('permissao');

radiosMoradia.forEach(radio => {
    radio.addEventListener('change', () => {
        if (document.getElementById('apartamento').checked) {
            permissao.style.display = "block";
        } else {
            permissao.style.display = "none";
        }
    });
});