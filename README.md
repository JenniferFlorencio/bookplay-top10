bookplay-top10
Uma página web para listar os 10 títulos mais acessados do Bookplay.


Sobre o desenvolvimento
No desafio da Bookplay, utilizei meus conhecimentos atuais em HTML, CSS e JavaScript para desenvolver este site, pois são as tecnologias que consigo aplicar com mais segurança no momento, atuando como iniciante.

Estrutura do HTML

O código HTML segue uma estrutura básica, mas organizada, que explica o funcionamento da página:

<!DOCTYPE html>: Indica ao navegador que o arquivo é um documento HTML5, para interpretar corretamente o conteúdo.

<html lang="en">: Abre o documento HTML e define o idioma da página como inglês (poderia ser "pt-BR" para português).

<head>: Contém informações importantes que não aparecem diretamente na página, como o título da aba, o conjunto de caracteres (UTF-8), e os links para o arquivo CSS e para a biblioteca de ícones Font Awesome, usada para os ícones das redes sociais no rodapé.

<title>: Define o título que aparece na aba do navegador.

<body>: Contém todo o conteúdo visível para o usuário.

<header class="conteudo-topo">: Seção do topo com o logo do Bookplay. Usei uma tag <a> com link vazio, que poderia ser direcionado para a página inicial, contendo a imagem do logo.

<section class="banner">: Exibe um título grande "Top 10 títulos mais acessados" e um texto explicativo, com um emoji para dar um toque visual.

<main id="lista-titulos">: Local onde os 10 títulos são inseridos dinamicamente via JavaScript após buscar os dados na API.

<footer class="rodape">: Rodapé com links (Ajuda, Termos de Uso, Políticas), ícones sociais do Bookplay (Instagram e Facebook), e informações da empresa (nome, CNPJ, endereço).

Ao final do <body>, o arquivo script.js é linkado, onde está o código JavaScript responsável pela busca dos dados e exibição dos títulos.


Organização do CSS


O arquivo CSS é responsável por deixar a página visualmente agradável e organizada, controlando cores, espaçamentos, fontes e posicionamento:

:root { ... }: Define variáveis CSS para as cores usadas no site, facilitando alterações globais.

html, body { height: 100%; margin: 0; }: Garante que o conteúdo ocupe toda a altura da tela e remove margens padrão do navegador.

* { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Segoe UI', sans-serif; }: Reseta margens e espaçamentos, define box-sizing para facilitar cálculo de tamanhos e aplica fonte legível para toda a página.

body { ... }: Define fundo claro, cor do texto escura, layout flex vertical para organizar header, main e footer, e garante altura mínima da tela.

header { ... }: Estiliza o topo com fundo azul, texto branco, cantos arredondados e sombra para profundidade, além de margem inferior.

main { ... }: Usa flex para ocupar espaço disponível e CSS Grid para organizar os cards responsivamente, com espaçamento e padding.

.banner { ... }: Estiliza o destaque no topo do conteúdo com cor azul, centralização, espaçamento, cantos arredondados, sombra e animação de fade-in.

@keyframes fadeIn { ... }: Animação que faz o banner aparecer suavemente.

.card { ... }: Estilo dos cards com fundo branco, cantos arredondados, padding, sombra e efeito hover que aumenta o card levemente.

.card h2 { ... } e .card p { ... }: Estilizam título e parágrafo do card com cores e espaçamentos adequados.

footer { ... }: Rodapé com fundo azul escuro, texto branco, padding confortável e margem superior para separar do conteúdo.

.conteudo-rodape a { ... }: Links no rodapé são brancos, espaçados e em negrito.

.conteudo-rodape p { ... }: Parágrafos do rodapé com cor branca e margens.

.icones-sociais { ... } e .icones-sociais a { ... }: Área dos ícones sociais com espaçamento e transições suaves.



Funcionamento do JavaScript


O código JavaScript tem a função de buscar os 10 títulos mais acessados da API e exibi-los na página de forma dinâmica:

Carregamento seguro: Uso do evento DOMContentLoaded para garantir que o código só rode após todo o HTML estar carregado, evitando erros ao manipular elementos ainda não existentes.

Seleção do elemento: Pego o elemento com id="lista-titulos" para inserir os títulos.

Indicador de carregamento: Antes de buscar os dados, insiro o texto “Carregando dados...” para informar o usuário que a página está processando.

Requisição à API: Uso fetch para fazer uma requisição GET para a API da Bookplay, que retorna os dados em formato JSON.

Tratamento de resposta: Verifico se a resposta está ok (status HTTP 200). Caso contrário, lanço um erro.

Processamento dos dados: Ao receber os dados, removo o texto de carregamento e verifico se o formato dos dados está correto.

Exibição dos títulos: Para cada título recebido, crio um card na página com o número, nome e código do livro, aplicando o estilo definido no CSS.

Tratamento de erros: Caso ocorra algum problema na requisição, exibo uma mensagem de erro clara para o usuário.

Este processo deixa a página dinâmica, moderna e interativa, além de melhorar a experiência do usuário ao informar o estado da aplicação (carregando ou erro).
