const { Model, DataTypes } = require('sequelize');

class People extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
      },
      { sequelize }
    );
  }

  static associate(models) {
    // Exemplo de associação
    // this.hasMany(models.OtherModel, { foreignKey: 'people_id' });
  }
}

module.exports = People;
