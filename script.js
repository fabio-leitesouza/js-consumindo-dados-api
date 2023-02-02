async function buscaEndereco(cep) {
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
    try {
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCepConvertida = await consultaCep.json();
        if (consultaCepConvertida.erro) {
            throw Error('Cep não existe');
        }
        var cidade = document.getElementById('cidade');
        var logradouro = document.getElementById('endereco');
        var estado = document.getElementById('estado');
        var bairro = document.getElementById('bairro');

        cidade.value = consultaCepConvertida.localidade;
        logradouro.value = consultaCepConvertida.logradouro;
        estado.value = consultaCepConvertida.uf;
        bairro.value = consultaCepConvertida.bairro;

        console.log(consultaCepConvertida);
        return consultaCepConvertida
    } catch (erro) {
        mensagemErro.innerHTML = `<p>Cep inválido!</p>`
        console.log(erro)
    }
}

var cep = document.getElementById('cep')
cep.addEventListener("focusout", () => buscaEndereco(cep.value))

// let ceps = ['01001000', '01001001']
// let conjuntoCep = ceps.map(valores => buscaEndereco(valores))
// Promise.all(conjuntoCep).then(respostas => console.log(respostas))

// var consultaCep = fetch('https://viacep.com.br/ws/01001000/json/')
// .then(resposta => resposta.json()) //etão ela responde após a promessa the promessa resolvida catch promessa rejeitada
// .then(r => {
//     if (r.erro) {
//         throw Error('Cep não existe')
//     }
//     console.log(r)
// })
// .catch(erro => console.log(erro))
// .finally(mensagem => console.log('Promessa concluída'))

// buscaEndereco()

