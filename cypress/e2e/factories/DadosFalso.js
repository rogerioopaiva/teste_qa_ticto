import { faker } from '@faker-js/faker';

export default {

    usuario: function () {

       
        let primeiroNome = faker.name.firstName()
        let segundoNome = faker.name.lastName()
        let nomeCompleto = faker.name.fullName()

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