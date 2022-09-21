import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import cadastro from "../../pages/Cadastro"

Given('que eu acesso a página da aplicação', () => {
    cadastro.navigateToPage()
});

When('a página estiver carregada', () => {
    cadastro.uploadPage()
});

Then('devo ver o título do formulário', () => {
    cadastro.findTitlePage()
});

When('informo meu nome inválido', () => {
    cadastro.fillWithInvalidName()
});

Then('devo receber uma mensagem de erro referente ao nome', () => {
    cadastro.validateInvalidNameMessage()
});

When('informo meu email inválido', () => {
    cadastro.fillWithInvalidEmail()
});

Then('devo receber uma mensagem de erro referente ao email', () => {
    cadastro.validateInvalidEmailMessage()
});

When('informo minha senha inválida', () => {
    cadastro.fillWithInvalidPassword()
});

Then('devo receber uma mensagem de erro referente a senha', () => {
    cadastro.validateInvalidPasswordMessage()
});

//Instrução 2.1

When('informo meus dados corretamente', () => {
    cadastro.fillWithDataValid()
});

Then('meu cadastro deve ser realizado com sucesso', () => {
    cadastro.validateRegisterSuccessMessage()
});

//Instrução 3

When('acesso a área de usuários já cadastrados', () => {
    cadastro.listUsersRegisterPage()
});

Then('devo conseguir localizar os dados que cadastrei', () => {
    cadastro.validateDataEqualToRegistered()
});

//Instrução 4
When('ao editar eu informar o nome inválido', () => {
    cadastro.fillUpdateInvalidName()
});

When('ao editar eu informar o email inválido', () => {
    cadastro.fillUpdateInvalidEmail()
});

When('devo receber uma mensagem de erro relacionado ao email', () => {
    cadastro.updateInvalidEmailMessage()
});

//Instrução 4.1

When('edito o meu cadastro informando novos dados', () => {
    cadastro.updateRegisteredData()
});

Then('meus dados deverão ser atualizados com sucesso', () => {
    cadastro.validateUpdateSuccessMessage()
});

//Instrução 5

When('eu acesso a lista de usuários cadastrados', () => {
    cadastro.listUsersRegisterPage()
});

Then('verifico se os meus dados foram alterados corretamente', () => {
    cadastro.verifyDataUpdate()
});

//Instrução 6

When('realizo a exclusão do meu cadastro', () => {
    cadastro.removeRegisterData()
});

Then('recebo a mensagem que dizendo que meus dados foram excluído com sucesso', () => {
    cadastro.validateRemoveSuccessMessage()
});

//Instrução 7
Then('verifico se o meu cadastro foi apagado corretamente.', () => {
    cadastro.verifyRegisterNotExist()
});