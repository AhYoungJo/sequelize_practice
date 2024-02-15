const { DataTypes } = require("sequelize");

const profileModel = (sequelize) => {
    return sequelize.define("profile", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING(31),
            allowNull: false,
        },
        age: DataTypes.INTEGER,
        email: DataTypes.STRING,
    });
};

module.exports = profileModel;
