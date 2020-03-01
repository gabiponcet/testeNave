const {Model, DataTypes} = require('sequelize');

class Comment extends Model {
    static init(sequelize) {
        super.init({
            author: DataTypes.STRING,
            message: DataTypes.STRING,
        }, {
            sequelize
        })
    }
    static associate(models){
        this.belongsTo(models.Post, {foreignKey: 'post_id', as: 'post'});
    }
}

module.exports = Comment;