import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import registerPage from "../../pages/RegisterPage"

Given('que eu acesso a página da aplicação', () => {
    registerPage.navigateToPage()
});

When('a página estiver carregada', () => {
    registerPage.uploadPage()
});

Then('devo ver o título do formulário', () => {
    registerPage.findTitlePage()
});

When('informo o nome inválido', () => {
    registerPage.fillWithInvalidName()
});

Then('devo receber uma mensagem de erro no campo nome', () => {
    registerPage.validateInvalidNameMessage()
});

When('informo o email inválido', () => {
    registerPage.fillWithInvalidEmail()
});

Then('devo receber uma mensagem de erro no campo email', () => {
    registerPage.validateInvalidEmailMessage()
});

When('informo a senha inválida', () => {
    registerPage.fillWithInvalidPassword()
});

Then('devo receber uma mensagem de erro no campo senha', () => {
    registerPage.validateInvalidPasswordMessage()
});

//Instrução 2.1

When('informo meus dados corretamente', () => {
    registerPage.fillWithDataValid()
});

Then('meu cadastro deve ser realizado com sucesso', () => {
    registerPage.validateRegisterSuccessMessage()
});

//Instrução 3

When('acesso a área de usuários já cadastrados', () => {
    registerPage.listUsersRegisterPage()
});

Then('devo conseguir localizar os dados que cadastrei', () => {
    registerPage.validateDataEqualToRegistered()
});

//Instrução 4
When('ao editar eu informar o nome inválido', () => {
    registerPage.fillUpdateInvalidName()
});

When('eu informar um email inválido ao editar o email', () => {
    registerPage.fillUpdateInvalidEmail()
});

When('devo receber uma mensagem de erro', () => {
    registerPage.updateInvalidEmailMessage()
});

//Instrução 4.1

When('edito o cadastro informando meus novos dados', () => {
    registerPage.updateRegisteredData()
});

Then('meus dados deverão ser atualizados com sucesso', () => {
    registerPage.validateUpdateSuccessMessage()
});

//Instrução 5

When('eu acesso a lista de usuários cadastrados', () => {
    registerPage.listUsersRegisterPage()
});

Then('verifico se os meus dados foram alterados corretamente', () => {
    registerPage.verifyDataUpdate()
});

//Instrução 6

When('realizo a exclusão do meu cadastro', () => {
    registerPage.removeRegisterData()
});

Then('recebo a mensagem que dizendo que meus dados foram excluído com sucesso', () => {
    registerPage.validateRemoveSuccessMessage()
});

//Instrução 7
Then('verifico se o meu cadastro foi apagado corretamente.', () => {
    registerPage.verifyRegisterNotExist()
});