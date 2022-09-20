import { faker } from '@faker-js/faker';

export default {

    register: function () {

        let firstName = faker.name.firstName()
        let lastName = faker.name.lastName()

        let data = {
            firstName: firstName,
            lastName: lastName,
            fullName: faker.name.fullName(),
            email: faker.internet.email(firstName),
            password: faker.internet.password(8),
            emailInvalid: faker.internet.email(firstName, lastName, '.test.dev')
        }

        return data
    }
}