const { DataTypes } = require('sequelize');

const PostModel = (sequelize) => {
	return sequelize.define('post', {
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
			type: DataTypes.TEXT('medium'),
			allowNull: false,
		},
		username: {
			type: DataTypes.STRING(20),
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING(50),
			allowNull: false,
		},
	});
};

module.exports = PostModel;
