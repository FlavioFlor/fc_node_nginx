const People = require('../models/people')

class PeopleController {
  async index(req, res) {
    try {
      const peoples = await People.findAll();
      const details = peoples.map(person => `${person.name} - ${person.email}`);
      const message = `<h1>Full Cycle Rocks!</h1><p><h2>Lista de nomes cadastrada no banco de dados.</h2><p>${details.join('</p><p>')}</p></p>`;
      res.send(message);
    } catch (error) {
      console.error('Erro ao buscar pessoas:', error);
      res.status(500).send('Erro ao buscar pessoas');
    }
  }
}

module.exports = new PeopleController();
