'use strict';

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
	sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
	sequelize = new Sequelize(
		config.database,
		config.username,
		config.password,
		config
	);
}

db.Post = require('./post')(sequelize);
db.Member = require('./member')(sequelize);
db.Profile = require('./profile')(sequelize);
db.Comment = require('./comment')(sequelize);

/** [1:1 연결]
 * member와 profile 연결: profile에 member의 기본키를 참조하는 memeberId라는 외래키 생성
 * onDelete: "CASCADE" =  참조키와 관련된 레코드가 삭제되면 외래키 또한 관련 레코드 삭제
 * */
db.Member.hasOne(db.Profile, { foreignKey: 'memberId', onDelete: 'CASCADE' });
db.Profile.belongsTo(db.Member, {
	foreignKey: 'memberId',
	onDelete: 'CASCADE',
});

// db.Post.hasMany(db.Comment, { foreignKey: "postId", onDelete: "CASCADE" });
// db.Comment.belongsTo(db.Post, { foreignKey: "postId", onDelete: "CASCADE" });
// 특별히 이름을 바꿔줄 필요가 없다면 아래와 같이 간소하게 적어도 된다.
/** [1:다 연결]
 *
 */
db.Post.hasMany(db.Comment);
db.Comment.belongsTo(db.Post);

db.Member.hasOne(db.Post, { foreignKey: 'memberId', onDelete: 'CASCADE' });
db.Post.belongsTo(db.Member, {
	foreignKey: 'memberId',
	onDelete: 'CASCADE',
});

db.Member.hasOne(db.Comment, { foreignKey: 'memberId', onDelete: 'CASCADE' });
db.Comment.belongsTo(db.Member, {
	foreignKey: 'memberId',
	onDelete: 'CASCADE',
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
