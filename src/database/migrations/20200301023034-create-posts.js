'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('posts', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        }, 
        author:{
          type: Sequelize.STRING,
          allowNull: false,
        },
        title:{
          type: Sequelize.STRING,
          allowNull: false,
        },
        text:{
          type: Sequelize.STRING,
          allowNull: false,
        },
        created_at:{
          type: Sequelize.TIMESTAMPS,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.TIMESTAMPS,
          allowNull: false,
        },      
      });
  
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('posts');
    
  }
};
