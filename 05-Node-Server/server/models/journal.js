// email store string null = false
// password store string null = false

module.exports = function (sequelize, DataTypes){
    const Journal = sequelize.define('journal',{
        title:{
            type: DataTypes.STRING, 
            allowNull: false
        },
        date:{
            type: DataTypes.STRING,
            allowNull: false
        },
        entry:{
            type: DataTypes.STRING,
            allowNull: false
        },
        owner:{
            type: DataTypes.INTEGER

        },
    });
    return Journal;
};