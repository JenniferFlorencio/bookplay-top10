document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("lista-titulos");

  // Adiciona um preloader temporário
  const preloader = document.createElement("p");
  preloader.textContent = "Carregando dados...";
  preloader.style.textAlign = "center";
  container.appendChild(preloader);

  // Faz a requisição para a API
  fetch('https://bmain.bookplay.com.br/parceiros/6BB6F620/recrutamento/top10/acessos')
    .then(response => {
      if (!response.ok) {
        throw new Error("Erro na resposta da API");
      }
      return response.json();
    })
    .then(dados => {
      container.removeChild(preloader); // Remove o preloader

      if (dados.success && dados.data) {
        exibirTitulos(dados.data);
      } else {
        container.innerHTML = "<p>Erro ao carregar os dados.</p>";
      }
    })
    .catch(error => {
      container.innerHTML = `<p style="color:red; text-align:center">Erro ao carregar os dados: ${error.message}</p>`;
    });
});

function exibirTitulos(titulos) {
  const container = document.getElementById("lista-titulos");

  titulos.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h2>${index + 1}. ${item.Nome}</h2>
      <p>Cód. Livro: ${item.CodLivro}</p>
    `;

    container.appendChild(card);
  });
}
