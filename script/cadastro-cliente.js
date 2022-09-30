function limpa_formulário_cep() {
  //Limpa valores do formulário de cep.
  document.getElementById("logradouro").value = "";
  document.getElementById("bairro").value = "";
  document.getElementById("cidade").value = "";
  document.getElementById("estado").value = "";
}

function meu_callback(conteudo) {
  if (!("erro" in conteudo)) {
    //Atualiza os campos com os valores.
    document.getElementById("logradouro").value = conteudo.logradouro;
    document.getElementById("bairro").value = conteudo.bairro;
    document.getElementById("cidade").value = conteudo.localidade;
    document.getElementById("estado").value = conteudo.uf;
  } //end if.
  else {
    //CEP não Encontrado.
    limpa_formulário_cep();
    alert("CEP não encontrado.");
  }
}

function pesquisacep(valor) {
  //Nova variável "cep" somente com dígitos.
  var cep = valor.replace(/\D/g, "");

  //Verifica se campo cep possui valor informado.
  if (cep != "") {
    //Expressão regular para validar o CEP.
    var validacep = /^[0-9]{8}$/;

    //Valida o formato do CEP.
    if (validacep.test(cep)) {
      //Preenche os campos com "..." enquanto consulta webservice.
      document.getElementById("logradouro").value = "...";
      document.getElementById("bairro").value = "...";
      document.getElementById("cidade").value = "...";
      document.getElementById("estado").value = "...";

      //Cria um elemento javascript.
      var script = document.createElement("script");

      //Sincroniza com o callback.
      script.src =
        "https://viacep.com.br/ws/" + cep + "/json/?callback=meu_callback";

      //Insere script no documento e carrega o conteúdo.
      document.body.appendChild(script);
    } //end if.
    else {
      //cep é inválido.
      limpa_formulário_cep();
      alert("Formato de CEP inválido.");
    }
  } //end if.
  else {
    //cep sem valor, limpa formulário.
    limpa_formulário_cep();
  }
}

document
  .getElementById("cadastro")
  .addEventListener("submit", async function (event) {
    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;
    const dataNascimento = document.getElementById("dataNascimento").value;
    const genero = document.getElementById("genero").value;
    const estadoCivil = document.getElementById("estadoCivil").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const profissao = document.getElementById("profissao").value;
    const tipo = document.getElementById("tipo").value;
    const logradouro = document.getElementById("logradouro").value;
    const numero = document.getElementById("numero").value;
    const complemento = document.getElementById("complemento").value;
    const bairro = document.getElementById("bairro").value;
    const estado = document.getElementById("estado").value;
    const cidade = document.getElementById("cidade").value;
    const pais = document.getElementById("pais").value;
    const cep = document.getElementById("cep").value;

    const dados = {
      cpf: cpf,
      dataNascimento: dataNascimento,
      email: email,
      endereco: {
        bairro: bairro,
        cep: cep,
        cidade: cidade,
        complemento: complemento,
        estado: estado,
        logradouro: logradouro,
        numero: numero,
        pais: pais,
        tipo: tipo,
      },
      estadoCivil: estadoCivil,
      genero: genero,
      nome: nome,
      profissao: profissao,
      telefone: telefone,
    };
    const response = await fetch(
      "https://fiq9i0dhe2.execute-api.us-east-1.amazonaws.com/clientes",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dados),
      }
    );
    let data;
    console.log(data);
    event.preventDefault();
    if (response.status !== 200) {
      alert("Dados inválidos");
    } else {
      alert("Cadastro feito com sucesso");
      window.location = "main.html";
    }
  });
