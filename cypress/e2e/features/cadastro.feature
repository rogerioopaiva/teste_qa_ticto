#language: pt

Funcionalidade: Cadastrar Usuario
    Eu como usuario
    Desejo prencher o formulario
    Para realizar meu cadastro
 
    Contexto: Realizar Cadastro
        Dado que eu acesso a página da aplicação

    Cenario: Verificar se a pagina foi carregada corretamente
        Quando a página estiver carregada
        Então devo ver o título do formulário

    Cenario: Tentar realizar cadastro com nome invalido
        Quando informo o nome inválido
        Então devo receber uma mensagem de erro no campo nome

    Cenario: Tentar realizar cadastro com email invalido
        Quando informo o email inválido
        Então devo receber uma mensagem de erro no campo email

    Cenario: Tentar realizar cadastro com senha invalida
        Quando informo a senha inválida
        Então devo receber uma mensagem de erro no campo senha

    Cenario: Realizar cadastro 
        Quando informo meus dados corretamente
        Então meu cadastro deve ser realizado com sucesso

    Cenario: Verificar se na lista contém os dados cadastrados
        Quando acesso a área de usuários já cadastrados
        Então devo conseguir localizar os dados que cadastrei

    Cenario: Editar meu cadastro informando nome inválido
        Quando ao editar eu informar o nome inválido
        Então devo receber uma mensagem de erro no campo nome
    
    Cenario: Editar meu cadastro informando email inválido
        Quando eu informar um email inválido ao editar o email
        Então devo receber uma mensagem de erro

    Cenario: Editar cadastro informando dados válidos
        Quando edito o cadastro informando meus novos dados
        Então meus dados deverão ser atualizados com sucesso
    
    Cenario: Verificar se os dados foram alterados corretamente
        Quando eu acesso a lista de usuários cadastrados
        Então verifico se os meus dados foram alterados corretamente

    Cenario: Apagar cadastro
        Quando realizo a exclusão do meu cadastro
        Então recebo a mensagem que dizendo que meus dados foram excluído com sucesso

    Cenario: Verificar se o cadastro foi apagado
        Quando eu acesso a lista de usuários cadastrados
        Então verifico se o meu cadastro foi apagado corretamente.
