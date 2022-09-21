import DadosFalso from "../e2e/factories/DadosFalso"

let usuario = DadosFalso.usuario()

class Cadastro {

    navegarParaPagina() {
        cy.visit('/')
        cy.screenshot({
            capture: 'runner',
          })
    }

    visualizarPagina() {
        cy.get('body').should('be.visible')
        cy.screenshot({
            capture: 'runner',
          })
    }

    encontrarTituloDaPagina() {
        cy.get('.col-12 h1').first().should('have.text', 'Formulário')
        cy.screenshot({capture: 'runner'})
    }

    cadastrarComNomeInvalido() {
        cy.get('input[name="name"]').type(usuario.primeiroNome)
        cy.get('input[name="email"]').type(usuario.email)
        cy.get('input[name="password"]').type(usuario.senha)
        cy.get('form button[type="submit"]').click();
        cy.screenshot({capture: 'runner'})
    }   

    validarMensagemNomeInvalido() {
        cy.get('.text-danger').contains('Insira um Nome e Sobrenome válido.')
        cy.screenshot({capture: 'runner'})
    }

    //Email invalido
    cadastrarComEmailInvalido() {
        cy.get('input[name="name"]').type(usuario.nomeCompleto)
        cy.get('input[name="email"]').type(usuario.emailInvalido)
        cy.get('input[name="password"]').type(usuario.senha)
        cy.screenshot({capture: 'runner'})
    } 
    
    validarMensagemEmailInvalido() {
            cy.get('form button[type="submit"]').click();
            cy.get('input[name="email"]').then(($input) => {
                expect($input[0].validationMessage).to.eq('"." está sendo usado em uma posição incorreta em ".test.dev".')
            })
            cy.screenshot({capture: 'runner'})
        }

        cadastrarComSenhaInvalida() {
            cy.get('input[name="name"]').type(usuario.nomeCompleto)
            cy.get('input[name="email"]').type(usuario.email)
            cy.get('input[name="password"]').type(usuario.senhaInvalida)
            cy.get('form button[type="submit"]').click();
            cy.screenshot({capture: 'runner'})
        }

        validarMensagemSenhaInvalida() {
            cy.get('.text-danger').contains('O campo Password deve ter no minimo 8 caracteres.')
            cy.screenshot({capture: 'runner'})
        }
        
        realizarCadastroValido() {
            cy.get('input[name="name"]').type(usuario.nomeCompleto)
            cy.get('input[name="email"]').type(usuario.email)
            cy.get('input[name="password"]').type(usuario.senha)
            cy.get('form button[type="submit"]').click();
            cy.screenshot({capture: 'runner'})
        }

        ValidarMensagemCadastroComSucesso() {
            cy.get('.alert-success').contains('Usuário cadastrado com sucesso.')
            cy.screenshot({capture: 'runner'})
        }

        validarTituloDaLista() {
            cy.get('.bg-gradient h1').last().should('have.text', 'Usuários cadastrados')
            cy.screenshot({capture: 'runner'})
        }

        validarDadoIgualAoCadastrado() {
            cy.get('tr').should('contain', `${usuario.nomeCompleto}`)
            cy.get('tr').should('contain', `${usuario.email}`)
            cy.screenshot({capture: 'runner'})
        }

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
            cy.screenshot({capture: 'runner'})
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
            cy.screenshot({capture: 'runner'})
        }
        
        validarMensagemEmailAtualizadoInvalido() {
            cy.get('input[id^="e_email"]').last().then(($input) => {
                expect($input[0].validationMessage).to.eq('"." está sendo usado em uma posição incorreta em ".test.dev".')
            })
            cy.screenshot({capture: 'runner'})
        }

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
            cy.screenshot({capture: 'runner'})
        }

        validarMensagemAtualizadoComSucesso() {
            cy.get('.alert-success').contains('Usuário salvo com sucesso.')
            cy.screenshot({capture: 'runner'})
        }

        verificarDadoAtualizado() {
            cy.get('tr').contains(usuario.nomeCompleto)
            cy.get('tr').contains(usuario.email)
            cy.screenshot({capture: 'runner'})
        }

        removerDadoCadastrado() {
            cy.get('.btn.btn-danger.dropdown-toggle').last().click()
            cy.get('.dropdown-menu.show').contains('Excluir').click()
            cy.get('button[type="submit"]').contains('Excluir').click({force: true})
            cy.screenshot({capture: 'runner'})
        }

        validarMesagemUsuarioRemovidoComSucesso() {
            cy.get('.alert-success').contains('Usuário removido com sucesso.')
            cy.screenshot({capture: 'runner'})
        }

        verificarCadastroNaoExiste() {
            cy.get(usuario.nomeCompleto).should('not.exist')
            cy.screenshot({capture: 'runner'})
        }

}


export default new Cadastro;

