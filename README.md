# bookplay-top10
Uma página web para listar os top 10 títulos mais acessados do Bookplay.

No desafio da Bookplay, utilizei meus conhecimentos atuais em HTML, CSS e JavaScript para desenvolver o site, pois são as tecnologias que consigo aplicar com mais segurança no momento, atuando como iniciante.

No html trabalhei de forma simples:

Esse código é a estrutura básica da minha página web que mostra os 10 títulos mais acessados do Bookplay. Vou explicar parte por parte:

<!DOCTYPE html> — Isso aqui diz para o navegador que esse arquivo é um documento HTML, pra ele entender como interpretar o conteúdo.

<html lang="en"> — Essa tag abre o código HTML inteiro e define que o idioma da página é inglês (mesmo eu falando português, deixei assim, mas poderia ser "pt-BR").

<head> — Aqui dentro ficam informações importantes que não aparecem direto na página, tipo o título que aparece na aba do navegador, o conjunto de caracteres para usar (UTF-8) e links para o CSS (que é o estilo da página) e para a biblioteca de ícones Font Awesome, que eu uso para os ícones das redes sociais no rodapé.

<title>Top 10 titulo mais acessados</title> — Esse é o título da aba que aparece no navegador.

<body> — Aqui dentro fica tudo que o usuário vê na página.

<header class="conteudo-topo"> — Essa é a parte do topo da página, que tem o logo do Bookplay. Usei uma tag <a> com link vazio (acho que poderia ser para a home), e dentro dela tem a imagem do logo.

<section class="banner"> — Essa seção tem um título grande “Top 10 títulos mais acessados” e um texto explicando que são os conteúdos mais acessados, com um emoji de coração azul para dar um toque legal.

<main id="lista-titulos"> — Esse é o lugar onde vão aparecer os 10 títulos que eu busco pela API usando JavaScript. Por isso, ele está vazio aqui no HTML, porque os dados vão ser colocados depois pelo script.

<footer class="rodape"> — Essa parte é o rodapé da página, que fica no final. Dentro tem três coisas:

links-rodape: com links para Ajuda, Termos de uso e Políticas (todos com #, que são links vazios, mas poderiam direcionar para outras páginas).

icones-sociais: que mostra os ícones clicáveis para Instagram e Facebook do Bookplay, usando os ícones da Font Awesome.

Textos com informações da empresa, como nome, CNPJ e endereço.

No final do body, eu linkei o arquivo script.js, que é onde está o código JavaScript que faz a mágica de buscar os dados e mostrar na tela.



No css trabelhei da seguinte forma:

Esse arquivo CSS é o que deixa minha página bonita e organizada, controlando cores, espaçamentos, fontes e o posicionamento dos elementos. Vou explicar cada parte:

:root { ... }
Aqui eu criei umas variáveis de cor para usar em todo o site. Isso facilita muito, porque se eu quiser mudar uma cor, só troco aqui e muda em todos os lugares. Por exemplo, --cor-bookplay é um azul, e o fundo da página é um azul clarinho.

html, body { height: 100%; margin: 0; }
Deixei o html e o body com altura total da tela e tirei as margens padrão que o navegador coloca, para garantir que tudo fique bem alinhado e ocupe toda a altura.

* { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Segoe UI', sans-serif; }
Isso aqui serve para "resetar" margens e espaçamentos padrões de todos os elementos (* significa tudo) e deixar o cálculo de tamanho mais fácil com box-sizing: border-box. Também coloquei uma fonte bonita e legível chamada "Segoe UI" para usar em toda a página.

body { ... }
O corpo da página tem um fundo clarinho, cor do texto escura para facilitar a leitura, e um layout em coluna (flex-direction: column) para organizar header, main e footer verticalmente. min-height: 100vh faz com que o corpo ocupe pelo menos toda a altura da tela, o que ajuda para o rodapé ficar no final mesmo com pouco conteúdo.

header { ... }
O cabeçalho tem o texto centralizado, um fundo azul forte (a cor do Bookplay), texto branco para contraste, cantos arredondados e uma sombra suave para dar profundidade. Também tem uma margem embaixo para separar do conteúdo.

main { ... }
A área principal usa flex: 1 para crescer e ocupar todo o espaço disponível entre o header e o footer. O conteúdo dentro é um grid que adapta a quantidade de colunas conforme o tamanho da tela, com colunas que têm no mínimo 1 fração do espaço (aqui tem um pequeno erro que pode corrigir depois). Também tem espaçamento entre os cards e um pouco de padding nas laterais.

.banner { ... }
O banner é aquele destaque no topo do conteúdo, com cor azul do Bookplay, centralizado, com bastante espaçamento e cantos arredondados. Também tem uma sombra e uma animação que faz ele aparecer suavemente de cima para baixo.

@keyframes fadeIn { ... }
Essa animação faz o banner aparecer devagar, começando transparente e um pouco para cima, e depois ficando opaco e na posição certa.

.card { ... }
Cada card (cada título da lista) tem fundo branco, cantos arredondados, padding para não grudar o texto nas bordas, sombra suave e margem entre eles. Quando passo o mouse, ele aumenta um pouco para dar um efeito legal.

.card h2 { ... }
O título do card é um pouco maior, tem uma margem embaixo para separar do texto e usa a cor azul do Bookplay para destacar.

.card p { ... }
O parágrafo do card é menor e com uma cor cinza para não brigar com o título.

footer { ... }
O rodapé tem texto centralizado, fundo azul escuro, texto branco, um padding maior para dar espaço e uma margem em cima para afastar do conteúdo. Ele fica sempre visível no final da página.

.conteudo-rodape a { ... }
Os links do rodapé são brancos, com espaço entre eles, sem sublinhado e em negrito para chamar atenção.

.conteudo-rodape p { ... }
Os parágrafos do rodapé também são brancos e têm margem para não ficarem colados.

.icones-sociais { ... }
A área dos ícones sociais tem uma margem para separar do texto.

.icones-sociais a { ... }
Os links dos ícones são brancos, com espaçamento e um tamanho maior para os ícones, além de uma transição suave quando mudam de cor (se você quiser depois colocar um efeito de hover).




No javaScript fiz da seguinte forma:

 código serve para mostrar na página os 10 títulos mais acessados, pegando esses dados direto de uma API. A ideia é que, quando a página carregar, ele já busque essas informações e mostre para a gente.

Primeiro, eu usei o evento DOMContentLoaded para garantir que o código só rode depois que toda a página estiver carregada. Assim, não dá erro porque o script tenta mexer em coisas que ainda não existem.

Depois, peguei o elemento da página onde quero mostrar esses títulos, usando o getElementById.

Antes de buscar os dados, coloquei um texto dizendo “Carregando dados...” para o usuário saber que a página está trabalhando e não parece travada.

Para buscar os dados, usei o fetch, que é uma forma moderna de fazer requisições para um endereço na internet. O fetch traz uma promessa de que vai entregar esses dados, e com o .then eu trato a resposta.

No primeiro .then, verifico se deu tudo certo (se o servidor respondeu ok). Se não der, eu crio um erro para mostrar que algo não funcionou.

Depois, pego os dados em formato JSON para poder trabalhar com eles em JavaScript.

No segundo .then, quando os dados chegam, eu tiro o texto de “Carregando...” e verifico se os dados estão no formato que eu espero (com as propriedades certas).

Se estiver tudo certo, chamo a função exibirTitulos, que cria na página um cartão para cada título, com o número, o nome e o código do livro.

Se acontecer algum erro, o .catch vai mostrar uma mensagem de erro para o usuário, para ele saber que não deu para carregar os dados.

A função exibirTitulos percorre todos os títulos e cria um elemento na página para mostrar cada um, usando um cartão bonito com estilo.

Então, o que esse código faz é deixar a página mais dinâmica, puxando dados reais da internet, mostrando que a gente se preocupa em avisar o usuário enquanto carrega e também em avisar caso algo dê errado. É uma forma legal de deixar o site mais moderno e interativo!
