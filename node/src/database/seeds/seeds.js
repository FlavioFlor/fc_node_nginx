const People = require('../../models/people');

const seeds = [
    {
        name: 'Fávio Flor',
        email: 'flavio@fullcycle.com'
    },
    {
        name: 'Wesley Willians',
        email: 'wesleywillians@fullcycle.com'
    },
    {
        name: 'Joaozinho',
        email: 'joaozinho@fullcycle.com'
    }
];

class PeopleSeeder {
    static async seed() {

        try {

            await People.sync();

            const peoples = await People.findAll();

            const hasValue = peoples.length > 0;

            if(!hasValue){
                await Promise.all(seeds.map(async seed => {
                    await People.create(seed);
                }));
                console.log('Seeds foram adicionados com sucesso.');
            }

        } catch (error) {
            console.error('Erro ao adicionar seeds:', error);
        }
    }
}

module.exports = PeopleSeeder;
