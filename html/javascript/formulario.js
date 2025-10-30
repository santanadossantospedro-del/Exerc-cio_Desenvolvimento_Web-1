const formulario = document.querySelector('form');
const campoNome = document.querySelector('#name');
const campoEmail = document.querySelector('#email');
const campoSenha = document.querySelector('#password');
const campoTelefone = document.querySelector('#phone');
const opcoesColaboracao = document.querySelectorAll('input[name="colaboracao"]');

campoTelefone.addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, "");
    value = value.substring(0, 11);

    const tamanho = value.length;

    if (tamanho > 6) { // (XX) XXXXX-XXXX
        value = value.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    } else if (tamanho > 2) { // (XX) XXXXX
        value = value.replace(/^(\d{2})(\d{0,5})$/, '($1) $2');
    } else if (tamanho > 0) { // (XX
        value = value.replace(/^(\d{0,2})$/, '($1');
    }

    e.target.value = value;
});


formulario.addEventListener('submit', function(evento){
    
    if (campoNome.value.trim() === '') { // Adicionado o {
        evento.preventDefault();
        alert('ERRO: Preencha com seu nome completo para finalizar o cadastro.');
        campoNome.focus();
        return;
    } 

    const padraoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,4}$/;

    if (campoEmail.value.trim() === '' || !padraoEmail.test(campoEmail.value)) {
        evento.preventDefault();
        alert('ERRO: Por favor, insira um e-mail válido!');
        campoEmail.focus();
        return;
    } 

    const senhaMinima = 6;
    if (campoSenha.value.trim() === '' || campoSenha.value.length < senhaMinima) {
        evento.preventDefault();
        alert(`ERRO: A senha deve ter no mínimo ${senhaMinima} caracteres.`);
        campoSenha.focus();
        return;
    }

    const padraoTelefone = /^\(?\d{2}\)?\s?\d{5}-?\d{4}$/;

    if (campoTelefone.value.trim() === '') {
        evento.preventDefault();
        alert('ERRO: O campo de telefone é obrigatório.');
        campoTelefone.focus();
        return; 
    }

    if (!padraoTelefone.test(campoTelefone.value.trim())) {
        evento.preventDefault();
        alert('ERRO: Por favor, insira um telefone válido no formato (XX) 9XXXX-XXXX.');
        campoTelefone.focus();
        return; 
    }

    let peloMenosUmSelecionado = false;
    for (const radio of opcoesColaboracao) {
        if (radio.checked) {
            peloMenosUmSelecionado = true;
            break;
        }
    }

    if (!peloMenosUmSelecionado) {
        evento.preventDefault();
        alert('ERRO: Por favor, selecione pelo menos uma forma de colaboração.');
        opcoesColaboracao[0].focus(); 
        return;
    }

    evento.preventDefault(); 
    alert('Cadastro feito com sucesso! Seja bem-vindo ao Esquadrão Miau!');
    formulario.reset(); 
    
});