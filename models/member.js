const { DataTypes } = require("sequelize");

const memberModel = (sequelize) => {
    return sequelize.define("member", {
        //칼럼 정의
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        memberId: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
};

module.exports = memberModel;
