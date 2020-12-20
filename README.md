
# UMovie

Projeto para estudo e implementação de pequeno projeto usando o Vue 3 e a Composition API.

## Instalação

Para rodar o projeto você deve clonar o repositório do git e configurar o arquivo .env com a API_KEY do themoviedb, como está a seguir:
```sh
$ git clone https://github.com/mateusmcordeiro/umovie.git
$ cd umovie
$ cp .env.example .env.local
```

Em seguida, edite o .env.local com a sua chave do Themoviedb e inicialize o projeto:
```sh
$ npm install
$ npm run serve
```

## Pontos levados em consideração: 
 - [x] Vue 3 e toda sua API de reatividade devem ser utilizados
 - [x] VueX já não é bem visto pelo mercado como melhor alternativa para stating, então deve ser feito alguma abordagem utilizando a API de reatividade como base.
 - [x] Muitos usuários de celular fazem uso de sites de filmes, então deve ser melhorado ao máximo o número de requests a serem feitas.
 - [x] A aplicação deve ter um design system base considerando que possa virar um produto maior.
