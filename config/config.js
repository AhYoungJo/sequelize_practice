require("dotenv").config();

//모듈화 시켜서 내보내기
module.exports = {
    development: {
        username: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        host: process.env.HOST,
        dialect: "mysql",
        port: process.env.PORT,
    },
    test: {
        username: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        host: process.env.HOST,
        dialect: "mysql",
        port: process.env.PORT,
    },
    production: {
        username: process.env.PRODUSER,
        password: process.env.PRODPASSWORD,
        database: process.env.PRODDATABASE,
        host: process.env.PRODHOST,
        dialect: "mysql",
        port: process.env.PRODPORT,
    },
};
