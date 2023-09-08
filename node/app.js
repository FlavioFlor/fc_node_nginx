const express = require('express');
require('./src/database');
const PeopleSeeder = require('./src/database/seeds/seeds');
const routes = require('./routers')

class App {
    constructor(){
        this.server = express()
        this.routes()
        this.seed()
    }

    async seed(){
        await PeopleSeeder.seed()
    }

    routes() {
        this.server.use(routes);
    }
}

module.exports = new App().server;
