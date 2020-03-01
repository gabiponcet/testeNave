'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('comments', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        }, 
        post_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {model: 'posts', key: 'id'},
          onUpdade: 'CASCADE',
          onDelete: 'CASCADE',
        },        
        message:{
          type: Sequelize.STRING,
          allowNull: false,
        },
        author:{
          type: Sequelize.STRING,
          allowNull: false,
        },
        created_at:{
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },      
      });
  
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('posts');
    
  }
};
