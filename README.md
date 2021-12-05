# Boas vindas ao repositório do projeto Konduto Explorer!

Esta é uma aplicação full-stack que proporciona uma viagem ao planeta vermelho sem sair de casa. Ela conta com um sistema CRUD de gerenciamento de usuários e imagens favoritas. A pessoa colaboradora tem acesso a galeria com as melhores imagens de Marte, pelos olhos das pessoas konduters.


# Tecnologias de back-end

  * Node.js

  * Express

  * MySQL

  * Sequelize

  * JSON Web Token

  * REST

  * MSC

# Tecnologias de front-end

  * React.js

  * ContextAPI

  * Hooks

  * CSS

  * Bootstrap

---

## Para executar a aplicação:

1. Clone o repositório:
  * `git clone git@github.com:Tarcisio-Menezes/KondutoExplorer.git`
  * Utilizando o terminal, entre na pasta do repositório que você acabou de clonar.
  * Entre na pasta `backend`.


2. Inicie sua instâcia MySQL e configure a sua conexão com o banco de dados:
  * No linux: `sudo systemctl start mysql.service`
    * Agora edite o arquivo `config.js`, em `/config` de acordo com as especificações de sua conexão com o MySQL.
    * Utilize variáveis de ambiente para tornar sua configuração mais segura.


3. Instale as dependências e inicialize a aplicação:
  * Instale as dependências:
    * `npm install`.
  * Inicie a aplicação:
    * `npm start`.
    * A mensagem `on-line na porta 3003` será exibida em seu terminal`.

  * Iniciando a aplicação backend em modo desenvolvedor:
    * Execute `npm run debug` para iniciar o backend utilizando o Nodemon.

  * Testes
    * O backend possui testes para as operações de criação de pessoa usuária e login.
      * Em `/backend` execute `npm test` para iniciar os testes com `jest`.


4. Agora vamos iniciar o front:
  * Abra uma nova aba em seu terminal;
  * Volte um nível com `cd ..`
  * Entre na pasta `frontEnd`


5. Instale as dependências e inicialize a aplicação:
    * Instale as dependências:
      * `npm install`
    * Inicie a aplicação:
      * `npm start`
      * Aperte `enter` caso precise iniciar em uma porta diferente da padrão.
      * Uma nova aba de seu navegador será aberta com a aplicação.

## Observações técnicas

 * Se você não possuir o `npm` instalado em sua máquina:
   * Faça o download [aqui](https://www.npmjs.com/package/download)

 * Se você não possuir o `MySQL` instalado em sua máquina:
   * Faça o download [aqui](https://www.mysql.com/downloads/)

## Como usar a aplicação:

* Konduto Explorer foi projetado para telas convencionais de computadores.

* A aplicação irá iniciar na página de login principal.
  * Novos usuários devem clicar no link `Crie seu usuário aqui`.

* Você será redirecionado para a tela de cadastros.
  * Digite o seu nome de pessoa usuária. Ele precisa ter ao menos oito caracteres.
  * Digite seu e-mail. É preciso que seja um e-mail válido.
  * Digite uma senha. Ela deve ter exatamente seis caracteres.

* Clique em cadastrar. Um alert comunicará se foi possível criar o seu usuário com sucesso.
  * Com o usuário cadastrado, clique em `Voltar para Login`.

* Digite o seu e-mail e senha cadastrados na tela anterior.
  * Clique em `Entrar`, você será redirecionado para a tela principal.

* Explorando a página inicial:
  * Na parte superior você encontrará a barra de navegação, que permite alternar entre as páginas `Home`, `Favoritos` e `Desconectar`.
  * Vamos começar explorando a página Home.

* Você deve escolher um `rover` para explorar. Esta opção pode ser alterada a qualquer momento.

* Após a seleção uma caixa de texto com as cores da Konduto exibirá algumas informações sobre o primeiro dia no planeta vermelho do rover escolhido.

* Logo abaixo os campos `Dia marciano` e `Navegue pelas páginas` serão exibidos. Em `Dia Marciano` você pode escolher um dia, a contar pela chegada do rover ao planeta, para exibir cards de fotos. Em `Navegue pelas páginas`, você pode alternar entre as páginas de imagens disponíveis.

* Cards contendo algumas informações sobre as fotos capturadas pelo rover escolhido serão renderizados.
  * Atenção: as imagens dos cards podem demorar por volta de 6 segundos para serem renderizadas. Isto ocorre devido a alta resolução de captura da maioria delas.

* Nos cards, você encontrará as informações: `Nome do rover que capturou a imagem`, `Nome da câmera utilizada` e `Status de atividade do rover`.
  * Caso você adimire alguma imagem, adicione-a aos favoritos.
  * Um alert será emitido em caso de sucesso, contendo informações sobre a operação.
  * O card contendo a imagem favoritada irá para a galeria de favoritos.

* Você pode acessar as imagens em tamanho real, clicando sobre elas.

* Para acessar a galeria de fotos clique em `Favoritos` na barra de navegação.
  * Aqui, você encontrará as melhores imagens, selecionadas pelos olhos das pessoas konduters.

* Na galeria de favoritos você pode encontrar algumas informações nos cards favoritados, como o `Nome do rover`, `Câmera utilizada` e também o nome e contato da pessoa konduter que o adicionou a galeria.

* Você pode excluir da galeria apenas os itens adicionados por você. Caso tente excluir um item adicionado por outro colaborador, um `alert` será emitido dizendo que está operação não é possível.

* Altere entre as páginas `Home` e `Favoritos` sempre que quiser. Clique em `Desconectar` para se deslogar e ser redirecionado para a página de login.

---

Divirta-se :)
