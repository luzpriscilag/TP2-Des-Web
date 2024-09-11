import { faker } from '@faker-js/faker';

export const gerarListaNomes = () => {
    let lista = [];
    for (let i = 0; i < 100; i++) {
        lista.push(faker.person.fullName());
    }
    return lista;
}

export const gerarNomesCargos = () => {
    let lista = [];
    for (let i = 0; i < 100; i++) {
        lista.push({nome: faker.person.fullName(), cargo: faker.person.jobTitle()});
    }
    return lista;
}