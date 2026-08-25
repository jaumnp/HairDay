<h1 align="center">
  ✂️ Hair Day - Agendamento para Barbearia & Salão
</h1>

<p align="center">
  <b>Aplicação web moderna para agendamento de atendimentos em barbearias e salões com controle de horários em tempo real e integração a API REST.</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/Webpack_5-8DD6F9?style=for-the-badge&logo=webpack&logoColor=black" alt="Webpack" />
  <img src="https://img.shields.io/badge/Day.js-FF5F4A?style=for-the-badge&logo=dayjs&logoColor=white" alt="Day.js" />
  <img src="https://img.shields.io/badge/JSON--Server-000000?style=for-the-badge&logo=json&logoColor=white" alt="JSON-Server" />
</p>

---

## 📌 Sumário

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Como Executar o Projeto](#-como-executar-o-projeto)
  - [Pré-requisitos](#pré-requisitos)
  - [Instalação e Execução](#instalação-e-execução)
- [Regras da Aplicação](#-regras-da-aplicação)
- [Licença](#-licença)

---

## 📖 Sobre o Projeto

O **Hair Day** é uma aplicação web desenvolvida para otimizar o fluxo de agendamentos em barbearias e salões de beleza. O sistema permite ao cliente ou recepcionista selecionar datas no calendário, visualizar os horários disponíveis divididos por turnos (Manhã, Tarde e Noite) e agendar um horário com confirmação e persistência instantânea.

O projeto utiliza **JavaScript Modular (ES Modules)**, manipulação avançada de datas com **Day.js**, empacotamento com **Webpack 5** e consumo assíncrono de dados via **JSON-Server**.

---

## ✨ Funcionalidades

- 📅 **Seleção de Data**: Navegação por datas com atualização em tempo real da grade de horários.
- ⏰ **Grade de Horários Dinâmica**:
  - Divisão automática por turnos: **Manhã** (09h às 12h), **Tarde** (13h às 18h) e **Noite** (19h às 21h).
  - Bloqueio inteligente de horários passados no dia atual.
  - Indicação visual e desativação de horários já reservados.
- 📝 **Criação de Agendamento**: Cadastro rápido com nome do cliente, data e horário selecionado.
- 📋 **Painel de Visualização**: Lista lateral organizada por turnos com os agendamentos do dia.
- ❌ **Cancelamento de Agendamento**: Exclusão de agendamentos com confirmação e atualização reativa da lista e da grade de horários.
- 📦 **Build & Bundling Moderno**: Configuração completa de Webpack com suporte a loaders de CSS, injeção de HTML e servidor de desenvolvimento com Hot Reload.

---

## 🚀 Tecnologias Utilizadas

- **Linguagem**: [JavaScript (ES6+)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- **Marcação & Estilização**: [HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML) & [CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS) (com Flexbox, CSS Grid e variáveis customizadas)
- **Manipulação de Datas**: [Day.js](https://day.js.org/) (Formatação, cálculos de fuso e verificação de horários passados/futuros)
- **Bundler & Build**: [Webpack 5](https://webpack.js.org/), `html-webpack-plugin`, `css-loader`, `style-loader` e `copy-webpack-plugin`
- **Servidor de Desenvolvimento**: `webpack-dev-server`
- **API Mock / Backend**: [JSON-Server](https://github.com/typicode/json-server) para simulação de API RESTful com persistência em arquivo JSON

---

## 📁 Estrutura do Projeto

```text
HairDay/
├── dist/                 # Arquivos compilados para produção
├── src/
│   ├── assets/           # Ícones SVG, logos e recursos visuais
│   ├── libs/             # Configurações de bibliotecas externas (ex.: Day.js locale)
│   ├── models/           # Módulos de controle do DOM e eventos
│   │   ├── from/         # Manipuladores de formulário (submit, change date)
│   │   ├── schedules/    # Renderização, carregamento e cancelamento de agendamentos
│   │   └── page-load.js  # Ciclo de inicialização da página
│   ├── services/         # Camada de integração com a API REST (Fetch API)
│   │   ├── api-config.js
│   │   ├── cancelSchedule.js
│   │   ├── newSchedule.js
│   │   └── schedulesFetchByDay.js
│   ├── styles/           # Folhas de estilo modularizadas
│   └── main.js           # Ponto de entrada (Entrypoint)
├── index.html            # Estrutura HTML da aplicação
├── server.json           # Banco de dados mockado da API
├── webpack.config.js     # Configurações do Webpack
└── package.json          # Dependências e scripts do projeto
```

---

## 🛠️ Como Executar o Projeto

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/)

### Instalação e Execução

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/SEU_USUARIO/HairDay.git
   cd HairDay
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor da API Mock (JSON-Server):**
   Em um terminal, execute:
   ```bash
   npm run server
   ```
   *A API estará disponível em `http://localhost:3333`.*

4. **Inicie a aplicação frontend (Webpack Dev Server):**
   Em outro terminal, execute:
   ```bash
   npm run dev
   ```
   *A aplicação abrirá automaticamente no navegador em `http://localhost:8080` (ou na porta indicada).*

5. **Para gerar a versão de produção:**
   ```bash
   npm run build
   ```

---

## 📋 Regras da Aplicação

1. Não é possível agendar horários em datas/horas que já passaram.
2. Cada horário só pode ser reservado por um único cliente no mesmo dia.
3. Ao alterar a data no calendário, a aplicação busca automaticamente os agendamentos cadastrados para aquele dia e atualiza tanto a grade quanto a lista lateral.
4. O cancelamento de um agendamento libera o horário imediatamente para novas marcações.

---

## 📄 Licença

Este projeto está sob a licença [MIT](LICENSE).

---

<p align="center">
  Desenvolvido por <a href="https://github.com/SEU_USUARIO">João Paulo Pires</a>
</p>
