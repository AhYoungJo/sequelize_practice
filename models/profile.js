const { DataTypes } = require("sequelize");

const profileModel = (sequelize) => {
    return sequelize.define("profile", {
        //다른 속성에 프라이머리키를 안 주면 아래와 같은 id속성이 자동으로 생성됨
        // id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     primaryKey: true,
        //     autoIncrement: true,
        // },
        username: {
            type: DataTypes.STRING(31),
            allowNull: false,
        },
        age: DataTypes.INTEGER,
        email: DataTypes.STRING,
    });
};

module.exports = profileModel;
