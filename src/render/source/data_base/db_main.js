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
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }

        const User = this.orm_sequelize.define("user", {
            username: {
                type: DataTypes.STRING
            }
        });
        this.orm_sequelize.sync()
        
        const jane = await User.create({ username: "Jane" });

    }
}


db = new Database_manage()
db.connect()





