 document
   .getElementById("cadastro")
   .addEventListener("submit", async function (event) {
     const nome = document.getElementById("nome");
     const cpf = document.getElementById("cpf");
     const dataNascimento = document.getElementById("dataNascimento");
     const genero = document.getElementById("genero");
     const estadoCivil = document.getElementById("estadoCivil");
     const email = document.getElementById("email");
     const telefone = document.getElementById("telefone");
     const profissao = document.getElementById("profissao");
     const tipo = document.getElementById("tipo");
     const logradouro = document.getElementById("logradouro");
     const numero = document.getElementById("numero");
     const complemento = document.getElementById("complemento");
     const bairro = document.getElementById("bairro");
     const estado = document.getElementById("estado");
     const cidade = document.getElementById("cidade");
     const pais = document.getElementById("pais");
     const cep = document.getElementById("cep");

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
       "http://localhost:8084/cliente",
       {
         method: "POST",
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
         },
         body: JSON.stringify(dados),
       }
     );

     let data;
     console.log(data);
     event.preventDefault();
     if (response.status == 200) {
      alert("Cadastro realizado com sucesso");
    }
     if (response.status !== 200) {
       alert("Dados inválidos");
     } 
     else {
       alert("Cadastro feito com sucesso");
       window.location = "main.html";
     }
   });
