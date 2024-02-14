const { DataTypes } = require("sequelize");

const PostModel = (sequelize) => {
    return sequelize.define("post", {
        //칼럼 정의
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        contents: {
            type: DataTypes.TEXT("medium"),
            allowNull: false,
        },
    });
};

module.exports = PostModel;
