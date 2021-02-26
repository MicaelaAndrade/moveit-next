


<h4 align="center">
	💪🏻  Moveit 💪🏻
</h4>


![](https://user-images.githubusercontent.com/53954022/109358823-243cec80-7863-11eb-8d70-596def0f02c2.png)



##  💻 Sobre o projeto

A aplicação desenvolvida é um cronômetro para utilizar a técnica [pomodoro](https://g.co/kgs/nRFQEo) para que ao final de cada ciclo de foco, o usuário receba um desafio de um exercício, para ajudar a diminuir as chances do usuário sofre uma lesão por falta de se movimentar durante o uso prolongado do computador.

O projeto foi desenvolvido durante o evento **NLW#04 - trilha de React** da [**Rocketseat**](https://rocketseat.com.br/), com o objetivo de criar uma aplicação web com React e Next.JS, em 5 aulas.

Para o desenvolvimento utilizamos **ReactJS** e **Next.js** com **TypeScript**.

---

## [](https://github.com/BrunoSaibert/move.it#-%EF%B8%8F-funcionalidades) ⚙️ Funcionalidades

Ao acessar a aplicação é solicitada uma permissão para enviar notificações para o usuário com a finalidade de informar o final de cada ciclo.

O usuário pode iniciar um ciclo de foco, quando o contador chega a zero, um alerta sonoro é emitido, além de uma notificação do navegador (caso o usuário tenha aceito as permissões). 

Além disso, é informada uma pontuação e um desafio para que o usuário realize durante o seu intervalo do pomodoro, onde o usuário deve informar se conseguiu ou não efetuar o desafio proposto.

Ao informar que o desafio foi concluído, a pontuação prevista é somada no seu total de pontos e o total de desafios concluídos é atualizado.

Caso o total de pontos seja suficiente para avançar de nível, uma modal é exibida com o novo nível do usuário. Um novo total para o próximo nível é informado na barra de progresso e a pontuação remanescente é acrescentada na mesma barra.

Ao atualizar a página, as informações de nível são recuperadas do Cookie

---

## [](https://github.com/BrunoSaibert/move.it#--como-executar-o-projeto) 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

#### 🧭 Rodando a aplicação

```bash

# Clone este repositório
$ git clone github.com/MicaelaAndrade/moveit-next

# Acesse a pasta do projeto no seu terminal/cmd
$ cd move.it

# Instale as dependências
$ npm install
# ou
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ npm run dev
# ou
$ yarn dev

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000

```

---

## 👩‍💻  Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Aplicação** (**[React](https://reactjs.org/)** + **[Next.js](https://nextjs.org/)** + **[TypeScript](https://www.typescriptlang.org/)**)

- **[js-cookie](https://github.com/js-cookie/js-cookie#readme)**

> Veja o arquivo [package.json](https://github.com/BrunoSaibert/move.it/blob/main/package.json)

#### **Utilitários**

- Editor: **[Visual Studio Code](https://code.visualstudio.com/)**
- Fonte geral: **[Inter](https://fonts.google.com/specimen/Inter)**
- Fonte contador: **[Rajdhani](https://fonts.google.com/specimen/Rajdhani)**
- Gerar README: **[Markeditor](https://markeditor.netlify.app/)**





