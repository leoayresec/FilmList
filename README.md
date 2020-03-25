# FilmList
Projeto de listagem de filmes criado para atender demanda solicitada para teste de conhecimento.

## APIS e Bibliotecas utilizadas
* https://trakt.docs.apiary.io
* https://www.themoviedb.org/documentation/api
* https://www.npmjs.com/package/redux
* https://www.npmjs.com/package/axios
* https://www.npmjs.com/package/styled-components
##  Instruções de uso
### Para rodar o projeto é necessário antes de tudo dar o git clone.
 git clone https://github.com/leoayresec/FilmList.git
### Após clonar o projeto em sua máquina local abra a pasta na linha de comando e rode:
 npm install ou yarn install
 
### Agora que já instalamos o nosso gerenciador de dependências podemos rodar nosso código com o seguinte comando
 npx-react-native run-android
 
### Pronto rápido e prático!
 Caso ocorra algum erro de depência no momento de executar o projeto, pode ser necessário realizar novamente a a isntalação da depedência de pacote Yarn ou NPM, caso você tenha executado npm install no primeiro momento, neste agora, você executará yarn install e vice versa.
 
## Tela Inicial
![Alt text](/img/Home.PNG?raw=true "Optional Title")

 Nesta tela, exibimos informações de Título e em qual ano o filme foi lançado, simples e prática. Temos 4 abas(Trending, Mais assistidos, Bilheteria, Mais esperados).
## Trending 
 Exibe os filmes que são tendências no momento;
 
## Mais Assistidos
 Exibe os filmes mais assistidos do momento;

## Bilheteria 
 Exibe os filmes de maiores bilheterias nos estados unidos;
 
## Mais esperados
 Exibe os filmes que tem lançamento previsto seja este ano ou anos posteriores;
 
### Você ainda pode acessar o detalhe de cada filme, basta clicar no filme desejado que abrirá a próxima tela


## Detalhe Filme
![Alt text](/img/Detalhe.PNG?raw=true "Optional Title")

Está tela exibe a imagem de cartaz do filme, a sinopse e qual(ais) genêros este filme pertence.
