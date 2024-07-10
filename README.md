## README

# Login-Register-Next-Auth-Prisma

Esta é uma aplicação Next.js com funcionalidades de login e registro utilizando NextAuth para autenticação e Prisma para ORM. A interface do usuário é estilizada com Tailwind CSS.

## Tecnologias Utilizadas
 
* Next.js
* NextAuth.js
* Prisma
* Tailwind CSS

## Requisitos

* Node.js (versão 12.0 ou superior)
* NPM ou Yarn
* Conta no GitHub para autenticação OAuth

## Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/sua-aplicacao.git
   cd sua-aplicacao
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

   ou

   ```bash
   yarn install
   ```

## Configuração do Prisma

1. **Configure o Prisma para conectar ao seu banco de dados:**

   * Crie um arquivo `.env` na raiz do projeto e adicione a variável `DATABASE_URL`:

     ```bash
     touch .env
     ```

   * Adicione o seguinte conteúdo ao arquivo `.env`:

     ```env
     DATABASE_URL="mongodb://USER:PASSWORD@HOST:PORT/DATABASE"
     ```

     USER: O usuário do MongoDB.
     PASSWORD: A senha do usuário.
     HOST: O endereço do servidor MongoDB.
     PORT: A porta do servidor MongoDB (padrão: 27017).
     DATABASE: O nome do banco de dados.

2. **Gere o cliente Prisma:**

   ```bash
   npx prisma generate
   ```

3. **Execute as migrações do Prisma para criar as tabelas no banco de dados:**

   ```bash
   npx prisma migrate dev --name init
   ```

## Configuração do NextAuth

1. **Adicione as seguintes variáveis de ambiente ao arquivo `.env`:**

   ```env
   GITHUB_CLIENTID=your_github_client_id
   GITHUB_SECRET=your_github_secret
   SECRET=your_random_secret
   ```

   * Substitua `your_github_client_id` e `your_github_secret` pelos valores obtidos ao registrar sua aplicação no GitHub.
   * O valor de `SECRET` deve ser uma string aleatória para criptografar tokens.

## Executando a Aplicação

1. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```

   ou

   ```bash
   yarn dev
   ```

2. **Acesse a aplicação em `http://localhost:3000`**.

## Comandos Úteis

* `npx prisma studio`: Abre o Prisma Studio para gerenciar o banco de dados.
* `npx prisma generate`: Gera o cliente Prisma.
* `npx prisma migrate dev --name <migration_name>`: Executa uma nova migração.

## Contribuição

1. Faça um fork do projeto.
2. Crie uma nova branch: `git checkout -b minha-nova-feature`
3. Faça suas alterações e commit: `git commit -m 'Minha nova feature'`
4. Envie para o repositório remoto: `git push origin minha-nova-feature`
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## Informações Adicionais

Com estas instruções, você deve estar pronto para configurar e executar a aplicação localmente. Se tiver dúvidas ou problemas, sinta-se à vontade para abrir uma issue no repositório.

