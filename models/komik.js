module.exports = (sequelize, DataTypes) => {
    const Komik = sequelize.define("komik", {
        id: {
           
        },
        title: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
        },
        author: {
            type: DataTypes.STRING,
        },
    });
    return Komik;
};