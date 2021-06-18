const { Disposable } = require("custom-electron-titlebar/common/lifecycle");
const { Sequelize, DataTypes } = require("sequelize")

class Database_manage{
    constructor(){
        this.orm_sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: 'database.sqlite'
        });
    }
    async connect(){
        try {
            await this.orm_sequelize.authenticate();
            console.log('Успешное подключение локальной базе данных');
        } catch (error) {
            console.error('Ошибка подключения: ', error);
        }

        const login_data = this.orm_sequelize.define("login_data", {
            login: {
                type: DataTypes.STRING
            },
            password: {
                type: DataTypes.STRING
            }
        });

        const auth_data = this.orm_sequelize.define("auth_data", {
            uuid: {
                type: DataTypes.INTEGER
            },
            auth_id: {
                type: DataTypes.STRING
            }
        });

        this.orm_sequelize.sync()
    }

    async save_login_data(login, password){
        login_data.create({
            login: login,
            password: password,
        })
    }
}


db = new Database_manage()
db.connect()

db.save_login_data("NIKITA", "был сдесь)))")





