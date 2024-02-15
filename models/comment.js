const { DataTypes } = require('sequelize');

const CommentModel = (sequelize) => {
	return sequelize.define('comment', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		//댓글이 달린 게시물 주인ID, 댓글 삭제 권한 주기 위해 필요한 데이터
		// 댓글 작성자 데이터 가져올 땐 로컬 스토리지id에서 가져와야하는 것 같음
		memberId: {
			type: DataTypes.STRING(30),
			allowNull: false,
		},
		comment: {
			type: DataTypes.TEXT('medium'),
			allowNull: false,
		},
	});
};

module.exports = CommentModel;
