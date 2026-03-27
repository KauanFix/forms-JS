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

    if (sozinho >= 8) {
        alert("Não é recomendado deixar o animalzinho tanto tempo sozinho, reflita!");
    }

    const CPFs = ["123.456.789-10", "109.876.543-21", "000.000.000-00"]
    if (cpf == CPFs[0] || cpf == CPFs[1] || cpf == CPFs[2]) {
        document.getElementById('erroCpf').textContent = 'O CPF não pode ser repetido'

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
const radiosApartamento = document.querySelectorAll('input[name="Moradia"]');
const permissao = document.getElementById('permissao');

radiosApartamento.forEach(radio => {
    radio.addEventListener('change', () => {
        if (document.getElementById('apartamento').checked) {
            permissao.style.display = "block";
        } else {
            permissao.style.display = "none";
        }
    });
});


const radiosCasa = document.querySelectorAll('input[name="Moradia"]');
const quintalSeguro = document.getElementById('quintalSeguro');

radiosCasa.forEach(radio => {
    radio.addEventListener('change', () => {
        if (document.getElementById('casa').checked) {
            quintalSeguro.style.display = "block";
        } else {
            quintalSeguro.style.display = "none";
        }
    });
});

const radiosPet = document.querySelectorAll('input[name="Pet"]');

radiosPet.forEach(radio => {
    radio.addEventListener('change', () => {
        if (document.getElementById('naoPet').checked) {
            alert("Pela falta de experiência é possível acompanhamento da ONG");
        }
    });
});