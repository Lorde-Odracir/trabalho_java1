const form = document.getElementById('formulario');
const valorA = document.getElementById('elemento-a');
const valorB = document.getElementById('elemento-b');

form.addEventListener('submit', function(e) {
    let formEValido = false;
    e.preventDefault();

    const mensagemSucesso = 'Tudo certo!';
    const mensagemErro = 'Valor de <b>A</b> esta maior que <b>B</b>'

    formEValido = (valorA.value >= valorB.value);
    if (formEValido) {
        const container = document.querySelector('.Mensagem');
        container.innerHTML = mensagemErro;
        container.style.display = 'block';
    } else {
        const containerSucesso = document.querySelector('.Mensagem');
        containerSucesso.innerHTML = mensagemSucesso;
        containerSucesso.style.display = 'block';

        valorA.value = '';
        valorB.value = '';
    }
})

console.log(form);