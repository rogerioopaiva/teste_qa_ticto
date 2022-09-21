import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import cadastro from "../../pages/Cadastro"

Given('que eu acesso a página da aplicação', () => {
    cadastro.navegarParaPagina()
});

When('a página que estou aguardando estiver carregada', () => {
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

When('informo meus dados corretamente', () => {
    cadastro.realizarCadastroValido()
});

Then('meu cadastro deve ser realizado com sucesso', () => {
    cadastro.ValidarMensagemCadastroComSucesso()
});

When('eu acesso a área de usuários já cadastrados', () => {
    cadastro.validarTituloDaLista()
});

Then('devo conseguir localizar os dados que cadastrei', () => {
    cadastro.validarDadoIgualAoCadastrado()
});

When('ao editar eu informar o nome inválido', () => {
    cadastro.atualizarComNomeInvalido()
});

When('ao editar eu informar o email inválido', () => {
    cadastro.atualizarComEmailInvalido()
});

When('devo receber uma mensagem de erro relacionado ao email', () => {
    cadastro.validarMensagemEmailAtualizadoInvalido()
});

When('edito o meu cadastro informando novos dados', () => {
    cadastro.atualizarDadoCadastrado()
});

Then('meus dados deverão ser atualizados com sucesso', () => {
    cadastro.validarMensagemAtualizadoComSucesso()
});

When('eu acesso a lista de usuários cadastrados', () => {
    cadastro.validarTituloDaLista()
});

Then('verifico se os meus dados foram alterados corretamente', () => {
    cadastro.verificarDadoAtualizado()
});

When('realizo a exclusão do meu cadastro', () => {
    cadastro.removerDadoCadastrado()
});

Then('recebo a mensagem que dizendo que meus dados foram excluído com sucesso', () => {
    cadastro.validarMesagemUsuarioRemovidoComSucesso()
});

Then('verifico se o meu cadastro foi apagado corretamente.', () => {
    cadastro.verificarCadastroNaoExiste()
});