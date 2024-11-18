# Aplicação Docker com Servidor REST e Aplicação Web

Este repositório contém o código-fonte de uma aplicação composta por dois serviços Docker:

1. **Servidor REST**: Implementado com Express.js (Node.js), fornece uma API REST simples.
2. **Aplicação Web**: Uma aplicação web que consome o Servidor REST e exibe a mensagem retornada.

> **Nota:** Este projeto é uma atividade avaliativa da faculdade.

## Pré-requisitos

- [Docker](https://www.docker.com/get-started) instalado em sua máquina.

## Estrutura do Projeto



```java.
├── docker-compose.yml
├── api-rest/
│   ├── index.js
│   ├── package.json
│   ├── package-lock.json
│   └── Dockerfile
└── web-app/
    ├── index.js
    ├── package.json
    ├── package-lock.json
    ├── Dockerfile
    └── public/
        └── index.html

```

## Passo a Passo para Execução

### 1. Clonar o Repositório
Clone este repositório em sua máquina local:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

Substitua `seu-usuario` e `seu-repositorio` pelo seu nome de usuário e nome do repositório no GitHub.
### 2. Configurar o Docker Compose
Certifique-se de que o arquivo `docker-compose.yml` está presente no diretório raiz do projeto. O conteúdo deve ser semelhante a este:

```
services:
  rest-server:
    build: ./rest-server
    container_name: rest-server
    networks:
      - my-network

  web-app:
    build: ./web-app
    container_name: web-app
    ports:
      - "8080:8080"
    networks:
      - my-network
    depends_on:
      - rest-server

networks:
  my-network:
    driver: bridge

```


### 3. Executar os Serviços com Docker Compose
No diretório raiz do projeto (onde está o `docker-compose.yml`), execute o seguinte comando para construir as imagens e iniciar os serviços:

```bash
docker-compose up --buil -d
```
>Nota: O parâmetro `--build` garante que as imagens serão reconstruídas, incorporando quaisquer alterações recentes no código.

### 4. Testar a Aplicação

Abra o navegador e acesse: 

```bash
http://localhost:8080
```

deverá ver a página da aplicação web exibindo a mensagem obtida do servidor REST

---

Tecnologias Utilizadas:
Docke, Node.js, Express.js