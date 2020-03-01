const {Model, DataTypes} = require('sequelize');

class Post extends Model {
    static init(sequelize) {
        super.init({
            author: DataTypes.STRING,
            title: DataTypes.STRING,
            text: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = Post;