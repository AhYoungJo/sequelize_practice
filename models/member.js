const { DataTypes } = require("sequelize");

const memberModel = (sequelize) => {
    return sequelize.define("member", {
        //칼럼 정의
        // id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     primaryKey: true,
        //     autoIncrement: true,
        // },

        //실습은 id를 참조하는걸로 했지만 난 memberId를 참조하고 싶어서 primary key를 바꿈
        memberId: {
            type: DataTypes.STRING(30),
            primaryKey: true,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
};

module.exports = memberModel;
