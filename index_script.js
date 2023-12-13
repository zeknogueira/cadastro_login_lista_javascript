let idGeral = 0;

let lista_registros = { //Objeto JS
    ultimoIdGravado: 0,
    pessoas: [{ id: 0, nome: "Milton Nascimento", telefone: '+55 (35) 96969-1010' }]
}



function visualizar(paginas) {
    document.body.setAttribute('page', paginas);

    if (paginas === 'cadastro') {
        document.getElementById('tabela').style.display = "none";
        document.getElementById('nome').focus(); //focus -> cursor sobre o campo

    }
    if (paginas === 'lista') {
        document.getElementById('tabela').style.display = "block";
        desenharTabela();
    }
}

function inserirPessoa() {
    idGeral++;
    const id = idGeral;
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    lista_registros.pessoas.push({ id, nome, telefone });
    desenharTabela();
    visualizar('lista');
}

function desenharTabela() {
    const tbody = document.querySelector("tbody");

    if (tbody) {
        tbody.innerHTML = lista_registros.pessoas.map(pessoa => {
            return `<tr>
                        <td>${pessoa.id}</td>
                        <td>${pessoa.nome}</td>    
                        <td>${pessoa.telefone}</td>
                    </tr>`}).join('') //o join() cria um espaço em branco para separar um próximo registro 

        // map() faz a duplicidade de um array, mantendo a mesma estrutura, mas mudando os dados
        // Ele pega a estrutura da lista, duplica pessoas e muda os dados (id, nome e fone) 
    }
}

function enviarDados() {
    e.preventDefault() //não enviar form em branco
    const dados = {
        id: document.getElementById('codigo').value,
        nome: document.getElementById('nome').value,
        telefone: document.getElementById('telefone').value
    };
    console.log(dados);
}

window.addEventListener('load',() => {
    desenharTabela();
    document.getElementById("cadastro-registro").addEventListener('submit',enviarDados);
});
