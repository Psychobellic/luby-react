# Instruções:
Instale https://nodejs.org/en/
Clone o repositório do github, 
Abra o command prompt, git bash ou o CLI de sua preferência.
Rode o comando 'npm install', sem apóstrofo, para instalação das dependências descritas em package.json
Rode o comando 'npm run dev', novamente sem apóstrofo, para rodar uma versão de desenvolvimento do projeto, que abrirá em uma nova guia do navegador padrão, em http://localhost:3000

## Entrevista Luby - React JS:

AutoLuby - Frontend
Descrição da prova:
Esta prova consiste na criação de um sistema para gerenciamento de uma loja que realiza venda de veículos.
Todos os campos que não estão marcados com (OPCIONAL) são obrigatórios.
Deve ser utilizado para criação deste front-end o seguinte protótipo:
Modo apresentação: https://www.figma.com/proto/Ql5IPzhsJX7YMR8ZZjdwgA/LabLuby?node-id=60%3A394&amp;scaling=min-zoom&amp;page-id=0%3A1&amp;starting-point-node-id=60%3A374
Modo desenvolvimento: https://www.figma.com/file/Ql5IPzhsJX7YMR8ZZjdwgA/LabLuby?node-id=60%3A394
REQUISITOS FUNCIONAIS
RF01 - Autenticação

Descrição: deve ser possível fazer a autenticação no sistema e dividir as rotas públicas das privadas, você deverá armazenar todos os dados no redux ou context. Para acessar as rotas privadas você deverá fornecer no cabeçalho da requisição a Autenticação do tipo Bearer Token.
Importante: utilizar o token retornado para autenticação das requisições privadas

URL: https://autoluby.dev.luby.com.br/login (Método POST)

email: admin@luby.com.br

password: admin

RF02 - Listagem de funcionários

Descrição: Deve ter uma página para listar os funcionários. Por padrão essa rota retorna uma listagem com paginação, porém, você pode enviar o filtro "noPaginate", por parâmetro na url, para retornar os dados sem paginação.

URL: https://autoluby.dev.luby.com.br/employees (Método GET)
Header: {
Accept: application/json,
Content-Type: application/json,
Authorization: Bearer + token
}

RF03 - Listagem de veículos

Descrição: Deve ter uma página para listar todos os veículos vendidos.

URL: https://autoluby.dev.luby.com.br/vehicles (Método GET)
Header: {
Accept: application/json,
Content-Type: application/json,
Authorization: Bearer + token
}

Opcional: O usuário poderá filtrar os veículos por modelo passando por parâmetro o filtro "model="NomeDoModelo" ", porém, é opcional.

RF04 - Listar os veículos reservados e vendidos do usuário autenticado.

RF05 - Formatar todos os valores monetários para reais (R$) apresentadas ao usuário (OPCIONAL)

REQUISITOS NÃO FUNCIONAIS
RNF01 - A aplicação deverá ser feita utilizando ReactJS ou React-Native

RNF02 - Gostaríamos de ver a utilização de TypeScript (OPCIONAL)

RNF03 - Gostaríamos que os campos de formulário validados com yup (OPCIONAL)

RNF04 - Gostaríamos de ver você utilizando o styled-components (OPCIONAL)

RNF05 - Você deve gerenciar todo o estado do aplicativo com Redux ou Context Api.

Atenção: ao finalizar a prova, o candidato deverá seguir as instruções do e-mail recebido!