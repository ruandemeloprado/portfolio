document.addEventListener("DOMContentLoaded", function () {
  const projetoFoto = document.getElementById("projetoFoto");
  const projetoTitulo = document.getElementById("projetoTitulo");
  const projetoTexto = document.getElementById("projetoTexto");

  const projetos = [
    {
      imagem: "./img/projeto3.jpg",
      titulo: "Comanda Eletronica",
      texto:
        "O projeto de comanda eletrônica foi desenvolvido com o objetivo de permitir que os clientes façam seus pedidos diretamente na mesa, eliminando a necessidade de um garçom para atendimento.Foi criado utilizando tecnologias como PHP em conjunto com Laravel, além de JavaScript assíncrono, jQuery e MySQL para sua construção.",
    },
    {
      imagem: "./img/projeto3.jpg",
      titulo: "TITULO PROJETO 02",
      texto: "EM BREVE ",
    },
    {
      imagem: "./img/projeto3.jpg",
      titulo: "TITULO PROJETO 03",
      texto: "EM BREVE",
    },
  ];
  let projetoAtual = 0;

  function atualizarProjeto() {
    projetoFoto.src = projetos[projetoAtual].imagem;
    projetoTitulo.textContent = projetos[projetoAtual].titulo;
    projetoTexto.textContent = projetos[projetoAtual].texto;
  }

  document
    .getElementById("proximoProjeto")
    .addEventListener("click", function () {
      projetoAtual = (projetoAtual + 1) % projetos.length;
      atualizarProjeto();
    });

  atualizarProjeto();
});
