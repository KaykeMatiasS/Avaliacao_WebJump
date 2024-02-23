# Avaliação WebJump | QA Pleno

Repositório criado para apresentação dos exercicios de automação Front-end (WEB). O repositório contém os cenários principais automatizados, assim como os opcionais.  
Automações de cenários realizadas em Cypress, conforme indicado.

## Pre-requisitos 

Para a execução dos scripts é necessário possuir o [Node.js](https://nodejs.org/en/download/current) e [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) instalados.

> Ao instalar o Node.js, o npm é instalado junto.
> Eu utilizei as versões `v20.10.0` e `9.5.0` do Node.js e npm, respectivamente. sugiro o uso da mesma versão ou versões futuras.

## Instalação
> **Nota:** a pasta node_modules está inclusa no `.gitignore` para evitar possiveis problemas na execução dos scripts, por isso é necessário a execução do comando `npm install`

Após a instalação do Node.js e o download do repositório Avaliacao_WebJump, o repositório deve ser acessado via terminar e enfim realizar a execução do comando `npm install`.
Que irá instalar as dependencias necessárias para a execução do projeto `node_modules`.
Ao finalizar a instalação, podemos seguir para a execução do cypress. Ainda no terminal, basta executar o comando `npx cypress open`.
Será exibida uma interface com os cenários requisitados na avaliação, basta `selecionar` o cenário desejado e observar a execução da automação

## Execução
> **Nota:** A interface do cypress pode demorar alguns segundos para ser exibida

Com o cypress aberto após a utilização do comando `npx cypress open`, basta apenas selecionar o teste que será vizualizados e esperar sua devida execução.
Os scripts obrigatórios e opcionais serão exibidos na interface do cypress assim que o `comando for executado`

## Visualização de scripts e cenários

Para vizualizar os scripts de automação que foram criados, basta seguir o caminho [cypress>Integration](https://github.com/KaykeMatiasS/Avaliacao_WebJump/tree/main/cypress/integration)
Para vizualizar os cenários que foram criados, basta acessar a pasta [Cenarios](https://github.com/KaykeMatiasS/Avaliacao_WebJump/tree/main/Cenarios)

## Utilização de cenários

Para a criação dos scripts de automação, decidi criar cases de testes, que são executadas durante a automação, utilizando do método BDD. Facilitando a compreensão e entendimento do que fora executado durante o script.
> **Exemplo:**
> DADO que o usuário acessou a plataforma
> QUANDO clicar na opção de criar uma conta
> ENTAO deve ser direcionado para a página de criação

## Problemas e comentários

> **Nota:** No código dos scripts estão alguns comentários detalhando mais especificamente alguns ocorridos e instruções do funcionamento do código, assim como justificativa para algumas linhas de código.
> Testes que envolvem login foram realizados utilizando o usuário fornecido pela própria plataforma

- Todos os testes foram realizados utilizando `Google Chrome` e `Microsoft Edge`
- O refresh da plataforma sendo realizado de tempos em tempos pode apagar as massas de teste criadas, então caso os testes sejam executados em sequencia, se atentar a este fator.
- Alguns IDs de elementos de tela eram alterados após o refresh da plataforma, por consequencia a busca de certos elementos de tela foi realizada por outros componentes
- No cenário extra "Esqueci Minha Senha", existe a apresentação de um captcha, impossibilitando o seguimento da automação, sem a utilização de softwares de terceiros.
- Foram utilizados os comandos "cy.wait()" em algumas sessões devido a demora de carregamento da plataforma, assim permitindo um teste mais fluído com o resultado esperado.
___