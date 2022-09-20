import DataFactory from "../e2e/factories/DataFactory"

let register = DataFactory.register()
let fullName = register.fullName
let email = register.email

class RegisterPage {

    navigateToPage() {
        cy.visit('/')
    }

    uploadPage() {
        cy.get('body').should('be.visible')
    }

    findTitlePage() {
        cy.get('.col-12 h1').first().should('have.text', 'Formulário')
    }

    fillWithInvalidName() {
        cy.get('input[name="name"]').type(register.firstName)
        cy.get('input[name="email"]').type(email)
        cy.get('input[name="password"]').type(register.password)
        cy.get('form button[type="submit"]').click();
    }   

    validateInvalidNameMessage() {
        cy.get('.text-danger').contains('Insira um Nome e Sobrenome válido.')
    }

    //Email invalido
    fillWithInvalidEmail() {
        cy.get('input[name="name"]').type(fullName)
        cy.get('input[name="email"]').type(register.emailInvalid)
        cy.get('input[name="password"]').type(register.password)
    } 
    
    validateInvalidEmailMessage() {
            cy.get('form button[type="submit"]').click();
            cy.get('input[name="email"]').then(($input) => {
                expect($input[0].validationMessage).to.eq('"." está sendo usado em uma posição incorreta em ".test.dev".')
            })
        }

        //Senha invalida

        fillWithInvalidPassword() {
            cy.get('input[name="name"]').type('Alex Costa')
            cy.get('input[name="email"]').type(`alex@teste.com`)
            cy.get('input[name="password"]').type('senha')
            cy.get('form button[type="submit"]').click();
        }

        validateInvalidPasswordMessage() {
            cy.get('.text-danger').contains('O campo Password deve ter no minimo 8 caracteres.')
        }

        //Instrução 2.1
        
        fillWithDataValid() {
            cy.get('input[name="name"]').type(fullName)
            cy.get('input[name="email"]').type(email)
            cy.get('input[name="password"]').type(register.password)
            cy.get('form button[type="submit"]').click();
        }

        validateRegisterSuccessMessage() {
            cy.get('.alert-success').contains('Usuário cadastrado com sucesso.')
        }

         //Instrução 3
        listUsersRegisterPage() {
            cy.get('.bg-gradient h1').last().should('have.text', 'Usuários cadastrados')
        }

        validateDataEqualToRegistered() {
            cy.get('tr').should('contain', `${fullName}`)
            cy.get('tr').should('contain', `${email}`)
        }

        //Instrução 4
        fillUpdateInvalidName() {
            cy.get('.btn.btn-danger.dropdown-toggle').last().click()
            cy.get('.dropdown-menu.show').contains('Editar').click()
            cy.get('input[id^=e_name]').last().clear()
            cy.get('input[id^=e_name]').last().type(register.firstName)
            cy.on("uncaught:exception", (err, runnable) => {
                if (err.message.includes("validateForm is not defined")) {
                    return false;
                }
                return false;
            });
            cy.get('button[form^=edit]').last().contains('Salvar').click();
        }


        fillUpdateInvalidEmail() {
            cy.get('.btn.btn-danger.dropdown-toggle').last().click()
            cy.get('.dropdown-menu.show').contains('Editar').click()
            cy.get('input[id^=e_email]').last().clear()
            cy.get('input[id^=e_email]').last().type(register.emailInvalid)
            cy.on("uncaught:exception", (err, runnable) => {
                if (err.message.includes("validateForm is not defined")) {
                    return false;
                }
                return false;
            });
            cy.get('button[form^=edit]').last().contains('Salvar').click();
        }
        
        updateInvalidEmailMessage() {
            cy.get('input[id^="e_email"]').last().then(($input) => {
                expect($input[0].validationMessage).to.eq('"." está sendo usado em uma posição incorreta em ".test.dev".')
            })
        }

        //Instrução 4.1
        updateRegisteredData() {
            cy.get('.btn.btn-danger.dropdown-toggle').last().click()
            cy.get('.dropdown-menu.show').contains('Editar').click()
            cy.get('input[id^=e_name]').last().clear()
            cy.get('input[id^=e_name]').last().type(fullName)
            cy.get('input[id^=e_email]').last().clear()
            cy.get('input[id^=e_email]').last().type(email)
            cy.on("uncaught:exception", (err, runnable) => {
                if (err.message.includes("validateForm is not defined")) {
                    return false;
                }
                return false;
            });
            cy.get('button[form^=edit]').last().contains('Salvar').click();
        }

        validateUpdateSuccessMessage() {
            cy.get('.alert-success').contains('Usuário salvo com sucesso.')
        }

        //Instrução 5
        verifyDataUpdate() {
            cy.get('tr').contains(fullName)
            cy.get('tr').contains(email)
        }

        //Instrução 6
        removeRegisterData() {
            cy.get('.btn.btn-danger.dropdown-toggle').last().click()
            cy.get('.dropdown-menu.show').contains('Excluir').click()
            cy.get('button[type="submit"]').contains('Excluir').click({force: true})
        }

        validateRemoveSuccessMessage() {
            cy.get('.alert-success').contains('Usuário removido com sucesso.')
        }

        //Instrução 7
        verifyRegisterNotExist() {
            cy.get(fullName).should('not.exist')
        }

}


export default new RegisterPage;

