<h1 align="center">
🚀 Uma pergunta... uma resposta...
</h1>


## 🤗 Objetivo

Este projeto foi criado para o desafio do DoWhile da Rocketseat, é um cadastro de perguntas e respostas que qualquer pessoa pode usar para responder a perguntas aleatórias ou criar as suas próprias perguntas para que outros respondam.

O objetivo desta api é para que algum frontend faça o consumo dela, criando uma aplicação de perguntas e respostas. Esta API está disponível em [Uma pergunta... uma resposta...](http://localhost:3333/questions/random).

Como objetivo futuro para a API, seria o desenvolvimento de um ranking de respostas conforme o usuário que respondeu a pergunta, para isso, seria necessário alguma forma simples de cadastro de usuário para o registro de quem respondeu aquela determinada pergunta.

## 💻 Tecnologias
Esse projeto foi desenvolvido com as seguintes tecnologias:
* [Node.js](https://nodejs.org/en/)
* [Typescript](https://www.typescriptlang.org/)
* [Express.js](http://expressjs.com/)
* [Prisma](https://prisma.io/)
* [PostgreSQL](https://www.postgresql.org/)
* [docker-compose](https://docs.docker.com/compose/)

## 🎯 Funcionalidades
- Criação de perguna simples (uma pergunta e uma resposta)
- Criação de pergunta com várias respostas (ver exemplo abaixo)
- Busca de pergunta aleatória
- Busca de resposta para uma pergunta
- Verificação de resposta para uma pergunta

## 🔥 Como executar

- Clone o repositório com comando
```bash
git clone git@github.com:LeoDalcegio/uma-pergunta-uma-resposta.git
```
- Acesse a pasta do projeto
```bash
cd uma-pergunta-uma-resposta
```
- Instale as dependências do projeto
```bash
yarn install
```
- Renomeie o arquivo `.env.example` (que se encontra na raiz do projeto) para `.env`.

- Inicie o banco de dados Postgres local com o comando:
```bash
docker-compose up -d
```

- Inicie a api com o comando:
```bash
yarn dev
```

A sua API estára rodando e pode ser acessado em [`http://localhost:3333/`](http://localhost:3333/)

## 😎 Requisições de exemplo utilizando cURL

- Criar pergunta:

```bash
curl --header "Content-Type: application/json" -d '{"question": "Qual é a capital do Brasil?", "answer": "Brasília"}' http://localhost:3333/questions
```

- Buscar por pergunta aleatória:

```bash
curl http://localhost:3333/questions/random
```
- Buscar por resposta de pergunta:

```bash
curl http://localhost:3333/answers?questionId=2
```

- Verificar resposta de uma pergunta:

```bash
curl --header "Content-Type: application/json" -d '{"answer": "Brasília"}' http://localhost:3333/answers/verify?questionId=2
```
