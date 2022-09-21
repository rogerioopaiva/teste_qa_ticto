import { faker } from '@faker-js/faker';

export default {

    usuario: function () {

        // As varáveis abaixo foram criadas para manter os mesmos dados durante a execução dos testes.
        // Caso contrário, não seria possível validar o nome gerando novo nome dinamicamente a cada cenário.
       
        let primeiroNome = faker.name.firstName()
        let segundoNome = faker.name.lastName()
        let nomeCompleto = `${primeiroNome} ${segundoNome}`

        let dado = {
            primeiroNome: primeiroNome,
            segundoNome: segundoNome,
            nomeCompleto: nomeCompleto,
            email: faker.internet.email(primeiroNome),
            senha: faker.internet.password(8),
            emailInvalido: faker.internet.email(primeiroNome,segundoNome, '.test.dev'),
            senhaInvalida: faker.internet.password(5),
        }

        return dado
    }
}