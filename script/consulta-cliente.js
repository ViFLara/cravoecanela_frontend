var listaCliente = {
    ultimoIdGerado: 0,
    cliente:[
        {	
            "id": 1,			
            "nome": "Carla Clarice Ferreira",
            "cpf": "957.362.640-30",
            "dataNascimento": "09/04/1991",
            "genero": "FEMCIS",
            "estadoCivil": "CASADO",
            "profissao": "Outras",
            "email": "carla-ferreira78@zoomfoccus.com.br",
            "telefone": "(41) 98325-4837",
            "endereco": {	
                "cep": "83303-040",
                "logradouro": "Rua Porto Alegre",
                "numero": "853",		
                "complemento": "casa",
                "bairro": "Vila Vicente Macedo",
                "cidade": "Piraquara",
                "estado": "PR",
                "pais": "Brasil",
                "tipo": "RESIDENCIAL"	
            }			
        },				
        {	
            "id": 2,				
            "nome": "Ricardo Cláudio Vinicius Rocha",
            "cpf": "135.273.185-18",
            "dataNascimento": "07/02/1973",
            "genero": "MASCIS",
            "estadoCivil": "SOLTEIRO",
            "profissao": "Outras",
            "email": "ricardo-rocha99@citadini.imb.br",
            "telefone": "(87) 98774-4245",
            "endereco": {	
                "cep": "56328-550",
                "logradouro": "Rua do Abará",
                "complemento": "casa",
                "numero": "407",		
                "complemento": "casa",
                "bairro": "Areia Branca",
                "cidade": "Petrolina",
                "estado": "PE",
                "pais": "Brasil",
                "tipo": "RESIDENCIAL"	
            }			
        },				
        {	
            "id": 3,				
            "nome": "Esther Cláudia Rita de Paula",
            "cpf": "515.792.619-73",
            "dataNascimento": "25/02/1969",
            "genero": "FEMCIS",
            "estadoCivil": "CASADO",
            "profissao": "Outras",
            "email": "esther_depaula@mirafactoring.com.br",
            "telefone": "(71) 98344-7180",
            "endereco": {	
                "cep": "41195-776",
                "logradouro": "Rua da Mangueira de Tancredo Neves",
                "numero": "441",		
                "complemento": "casa",
                "bairro": "Barreiras",
                "cidade": "Salvador",
                "estado": "BA",
                "pais": "Brasil",
                "tipo": "RESIDENCIAL"	
            }			
        }
    ]
}

function criaTabela(){
    const tbody = document.getElementById('listaClienteBody')
    if(tbody){
        tbody.innerHTML = listaCliente.cliente.map( cliente => {
            return `<tr>
                <td>${cliente.id}</td>
                <td>${cliente.nome}</td>
                <td>${cliente.cpf}</td>
                <td class="botao"><button onclick="visualizar('cadastro', ${cliente.id})" type="button"><img title="Editar"    src="images/lapis.png" alt="Botão para editar cliente"></button></td>
                <td class="botao"><button onclick="perguntaConfirmaExclusao( ${cliente.id})" type="button"><img title="Excluir" src="images/lixeira-de-reciclagem.png" alt="Botão para excluir cliente"></button></td>
                <td class="botao"><button onclick="( ${cliente.id})" type="button"><img title="Consultar" src="images/lista-de-controle.png" alt="Botão para consultar transações do cliente"></button></td>
            </tr>`
        }).join('')
    }
}


function inserirCliente(nome, cpf){
    const id = listaCliente.ultimoIdGerado +1;
    listaCliente.cliente.push({
        id, nome, cpf
    })
    criaTabela()
    visualizar('listaCliente')
}


function editarCliente(nome, cpf){
    
}


function excluirCliente(nome, cpf){
    listaCliente.cliente = listaCliente.cliente.filter( cliente => {
        return cliente.id != id
    })
    criaTabela()
}

function perguntaConfirmaExclusao(id){
    if(confirm('Quer realizar a exclusão do cliente ' + id + ' ?')){
        excluirCliente(id)
    } 
}

function visualizar(pagina, id=null){
    document.body.setAttribute('page',pagina)
    if(pagina === 'cadastro'){
        const cliente = listaCliente.cliente.find(cliente => cliente.id == id)
        if(cliente){
            document.getElementById('id').value = cliente.id
            document.getElementById('nome').value = cliente.nome
            document.getElementById('cpf').value = cliente.cpf
            document.getElementById('dataNascimento').value = cliente.dataNascimento
            document.getElementById('genero').value = cliente.genero
            document.getElementById('estadoCivil').value = cliente.estadoCivil
            document.getElementById('profissao').value = cliente.profissao
            document.getElementById('email').value = cliente.email
            document.getElementById('telefone').value = cliente.telefone
            document.getElementById('cep').value = cliente.endereco.cep
            document.getElementById('tipo').value = cliente.endereco.tipo
            document.getElementById('logradouro').value = cliente.endereco.logradouro
            document.getElementById('numero').value = cliente.endereco.numero
            document.getElementById('complemento').value = cliente.endereco.complemento
            document.getElementById('bairro').value = cliente.endereco.bairro
            document.getElementById('numero').value = cliente.endereco.numero
            document.getElementById('cidade').value = cliente.endereco.cidade
            document.getElementById('estado').value = cliente.endereco.estado
            document.getElementById('pais').value = cliente.endereco.pais

        }
    }
}

function submeter(e){
    e.preventDefault()
    const dados = {
        id: document.getElementById('id').value,
        id: document.getElementById('nome').value,
        id: document.getElementById('cpf').value
    }
    if(dados.id){
        editarCliente(...dados)
    } else{
        inserirCliente(dados.nome, dados.cpf)
    }
    console.log(dados)
}

window.addEventListener('load', () => {
    criaTabela()

    document.getElementById('cadastroCliente').addEventListener('submit', submeter)
})