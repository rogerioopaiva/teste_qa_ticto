import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import cadastro from "../../pages/Cadastro"

Given('que eu acesso a página da aplicação', () => {
    cadastro.navegarParaPagina()
});

When('a página estiver carregada', () => {
    cadastro.visualizarPagina()
});

Then('devo ver o título do formulário', () => {
    cadastro.encontrarTituloDaPagina()
});

When('informo meu nome inválido', () => {
    cadastro.cadastrarComNomeInvalido()
});

Then('devo receber uma mensagem de erro referente ao nome', () => {
    cadastro.validarMensagemNomeInvalido()
});

When('informo meu email inválido', () => {
    cadastro.cadastrarComEmailInvalido()
});

Then('devo receber uma mensagem de erro referente ao email', () => {
    cadastro.validarMensagemEmailInvalido()
});

When('informo minha senha inválida', () => {
    cadastro.cadastrarComSenhaInvalida()
});

Then('devo receber uma mensagem de erro referente a senha', () => {
    cadastro.validarMensagemSenhaInvalida()
});

//Instrução 2.1

When('informo meus dados corretamente', () => {
    cadastro.realizarCadastroValido()
});

Then('meu cadastro deve ser realizado com sucesso', () => {
    cadastro.ValidarMensagemCadastroComSucesso()
});

//Instrução 3

When('acesso a área de usuários já cadastrados', () => {
    cadastro.validarTituloDaLista()
});

Then('devo conseguir localizar os dados que cadastrei', () => {
    cadastro.validarDadoIgualAoCadastrado()
});

//Instrução 4
When('ao editar eu informar o nome inválido', () => {
    cadastro.atualizarComNomeInvalido()
});

When('ao editar eu informar o email inválido', () => {
    cadastro.atualizarComEmailInvalido()
});

When('devo receber uma mensagem de erro relacionado ao email', () => {
    cadastro.validarMensagemEmailAtualizadoInvalido()
});

//Instrução 4.1

When('edito o meu cadastro informando novos dados', () => {
    cadastro.atualizarDadoCadastrado()
});

Then('meus dados deverão ser atualizados com sucesso', () => {
    cadastro.validarMensagemAtualizadoComSucesso()
});

//Instrução 5

When('eu acesso a lista de usuários cadastrados', () => {
    cadastro.validarTituloDaLista()
});

Then('verifico se os meus dados foram alterados corretamente', () => {
    cadastro.verificarDadoAtualizado()
});

//Instrução 6

When('realizo a exclusão do meu cadastro', () => {
    cadastro.removerDadoCadastrado()
});

Then('recebo a mensagem que dizendo que meus dados foram excluído com sucesso', () => {
    cadastro.validarMesagemUsuarioRemovidoComSucesso()
});

//Instrução 7
Then('verifico se o meu cadastro foi apagado corretamente.', () => {
    cadastro.verificarCadastroNaoExiste()
});