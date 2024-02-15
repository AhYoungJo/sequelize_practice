const { DataTypes } = require("sequelize");

const CommentModel = (sequelize) => {
    return sequelize.define("comment", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        content: {
            type: DataTypes.TEXT("medium"),
            allowNull: false,
        },
    });
};

module.exports = CommentModel;
