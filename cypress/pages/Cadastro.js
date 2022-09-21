import DadosFalso from "../e2e/factories/DadosFalso"

let usuario = DadosFalso.usuario()

class Cadastro {

    navegarParaPagina() {
        cy.visit('/')
    }

    visualizarPagina() {
        cy.get('body').should('be.visible')
    }

    encontrarTituloDaPagina() {
        cy.get('.col-12 h1').first().should('have.text', 'Formulário')
    }

    cadastrarComNomeInvalido() {
        cy.get('input[name="name"]').type(usuario.primeiroNome)
        cy.get('input[name="email"]').type(usuario.email)
        cy.get('input[name="password"]').type(usuario.senha)
        cy.get('form button[type="submit"]').click();
    }   

    validarMensagemNomeInvalido() {
        cy.get('.text-danger').contains('Insira um Nome e Sobrenome válido.')
    }

    //Email invalido
    cadastrarComEmailInvalido() {
        cy.get('input[name="name"]').type(usuario.nomeCompleto)
        cy.get('input[name="email"]').type(usuario.emailInvalido)
        cy.get('input[name="password"]').type(usuario.senha)
    } 
    
    validarMensagemEmailInvalido() {
            cy.get('form button[type="submit"]').click();
            cy.get('input[name="email"]').then(($input) => {
                expect($input[0].validationMessage).to.eq('"." está sendo usado em uma posição incorreta em ".test.dev".')
            })
        }

        //Senha invalida

        cadastrarComSenhaInvalida() {
            cy.get('input[name="name"]').type(usuario.nomeCompleto)
            cy.get('input[name="email"]').type(usuario.email)
            cy.get('input[name="password"]').type(usuario.senhaInvalida)
            cy.get('form button[type="submit"]').click();
        }

        validarMensagemSenhaInvalida() {
            cy.get('.text-danger').contains('O campo Password deve ter no minimo 8 caracteres.')
        }

        //Instrução 2.1
        
        realizarCadastroValido() {
            cy.get('input[name="name"]').type(usuario.nomeCompleto)
            cy.get('input[name="email"]').type(usuario.email)
            cy.get('input[name="password"]').type(usuario.senha)
            cy.get('form button[type="submit"]').click();
        }

        ValidarMensagemCadastroComSucesso() {
            cy.get('.alert-success').contains('Usuário cadastrado com sucesso.')
        }

         //Instrução 3
        validarTituloDaLista() {
            cy.get('.bg-gradient h1').last().should('have.text', 'Usuários cadastrados')
        }

        validarDadoIgualAoCadastrado() {
            cy.get('tr').should('contain', `${usuario.nomeCompleto}`)
            cy.get('tr').should('contain', `${usuario.email}`)
        }

        //Instrução 4
        atualizarComNomeInvalido() {
            cy.get('.btn.btn-danger.dropdown-toggle').last().click()
            cy.get('.dropdown-menu.show').contains('Editar').click()
            cy.get('input[id^=e_name]').last().clear()
            cy.get('input[id^=e_name]').last().type(usuario.primeiroNome)
            cy.on("uncaught:exception", (err, runnable) => {
                if (err.message.includes("validateForm is not defined")) {
                    return false;
                }
                return false;
            });
            cy.get('button[form^=edit]').last().contains('Salvar').click();
        }


        atualizarComEmailInvalido() {
            cy.get('.btn.btn-danger.dropdown-toggle').last().click()
            cy.get('.dropdown-menu.show').contains('Editar').click()
            cy.get('input[id^=e_email]').last().clear()
            cy.get('input[id^=e_email]').last().type(usuario.emailInvalido)
            cy.on("uncaught:exception", (err, runnable) => {
                if (err.message.includes("validateForm is not defined")) {
                    return false;
                }
                return false;
            });
            cy.get('button[form^=edit]').last().contains('Salvar').click();
        }
        
        validarMensagemEmailAtualizadoInvalido() {
            cy.get('input[id^="e_email"]').last().then(($input) => {
                expect($input[0].validationMessage).to.eq('"." está sendo usado em uma posição incorreta em ".test.dev".')
            })
        }

        //Instrução 4.1
        atualizarDadoCadastrado() {
            cy.get('.btn.btn-danger.dropdown-toggle').last().click()
            cy.get('.dropdown-menu.show').contains('Editar').click()
            cy.get('input[id^=e_name]').last().clear()
            cy.get('input[id^=e_name]').last().type(usuario.nomeCompleto)
            cy.get('input[id^=e_email]').last().clear()
            cy.get('input[id^=e_email]').last().type(usuario.email)
            cy.on("uncaught:exception", (err, runnable) => {
                if (err.message.includes("validateForm is not defined")) {
                    return false;
                }
                return false;
            });
            cy.get('button[form^=edit]').last().contains('Salvar').click();
        }

        validarMensagemAtualizadoComSucesso() {
            cy.get('.alert-success').contains('Usuário salvo com sucesso.')
        }

        //Instrução 5
        verificarDadoAtualizado() {
            cy.get('tr').contains(usuario.nomeCompleto)
            cy.get('tr').contains(usuario.email)
        }

        //Instrução 6
        removerDadoCadastrado() {
            cy.get('.btn.btn-danger.dropdown-toggle').last().click()
            cy.get('.dropdown-menu.show').contains('Excluir').click()
            cy.get('button[type="submit"]').contains('Excluir').click({force: true})
        }

        validarMesagemUsuarioRemovidoComSucesso() {
            cy.get('.alert-success').contains('Usuário removido com sucesso.')
        }

        //Instrução 7
        verificarCadastroNaoExiste() {
            cy.get(usuario.nomeCompleto).should('not.exist')
        }

}


export default new Cadastro;

