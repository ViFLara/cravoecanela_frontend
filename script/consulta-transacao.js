var listaTransacoes = {
  ultimoIdGerado: 0,
  transacao: [
    {
      id: 1,
      dataServico: "05-04-2022",
      servico: "Consultoria Atividade Fisica",
    },
    {
      id: 2,
      dataServico: "18-08-2022",
      servico: "Consultoria Atividade Fisica",
    },
    {
      id: 3,
      dataServico: "23-09-2022",
      servico: "Consultoria Alimentar",
    },
  ],
};
function criaTabela() {
  const tbody = document.getElementById("listaTransacoesBody");
  if (tbody) {
    tbody.innerHTML = listaCliente.cliente
      .map((transacao) => {
        return `<tr>
                <td>${transacao.id}</td>
                <td>${transacao.data}</td>
                <td>${transacao.servico}</td>
            </tr>`;
      })
      .join("");
  }
}

function inserirCliente(nome, cpf) {
  const id = listaTransacoes.ultimoIdGerado + 1;
  listaTransacoes.transacao.push({
    id,
    data,
    servico,
  });
  criaTabela();
  visualizar("listaTransacoes");
}

function visualizar(pagina, id = null) {
  document.body.setAttribute("page", pagina);
  if (pagina === "cadastro") {
    const cliente = listaTransacoes.transacao.find(
      (transacao) => transacao.id == id
    );
    if (transacao) {
      document.getElementById("id").value = transacao.id;
      document.getElementById("data").value = transacao.data;
      document.getElementById("servico").value = transacao.servico;
    }
  }
}
