'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Favorites', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      imagePath: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      rover: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      camera: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      landing: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      launch: {
        allowNull: true,
        type: Sequelize.STRING,
      } 
    })
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('Favorites');
  },
};
