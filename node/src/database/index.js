const Sequelize = require('sequelize');
const databaseConfig = require('../config/database');
const People = require('../models/people');

const models = [People];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.forEach(model => {
      model.init(this.connection);
      if (model.associate) {
        model.associate(this.connection.models);
      }
    });
  }
}

module.exports = new Database();
