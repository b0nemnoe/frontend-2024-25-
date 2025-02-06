import Sequelize from "sequelize";
const { DataTypes, Op } = Sequelize;

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./database.sqlite",
    define: {
        timestamps: false,
    },
});

const Student = sequelize.define(
    "student",
    {
        student_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false,
            validate: {
                len: [4, 20],
            },
        },
        favorite_class: {
            type: DataTypes.STRING(25),
            defaultValue: 'Computer Science',
        },
        school_year: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        has_language_examination: {
            type: DataTypes.TINYINT,
            defaultValue: true,
        },
    }
);

// Ha nem fontosak az adatok, töröld a táblát
sequelize.drop()
    .then(() => {
        console.log("Table dropped successfully, recreating table...");

        // Újra létrehozzuk a táblát és adatokat töltünk be
        return Student.sync({ force: true });
    })
    .then(() => {
        // Adatok beszúrása újra
        return Student.bulkCreate([
            { name: "Péter", favorite_class: "Frontend", school_year: 12, has_language_examination: true },
            { name: "János", favorite_class: "Aszalfejl", school_year: 11, has_language_examination: false },
            { name: "Aladár", favorite_class: "Computer Science", school_year: 10, has_language_examination: true },
            { name: "Karcsi", favorite_class: "Történelem", school_year: 9, has_language_examination: false },
            { name: "Henrik", favorite_class: "Computer Science", school_year: 13, has_language_examination: true },
        ]);
    })
    .then((data) => {
        console.log("Inserted students:");
        data.forEach((element) => {
            console.log(element.toJSON());
        });
    })
    .catch((err) => {
        console.log(`Error during the process: ${err.message}`);
    });

// Kérd le azokat a diákokat, akiknek a kedvenc tantárgya 'Computer Science' vagy van nyelvvizsgájuk
Student.findAll({
    where: {
        [Op.or]: [
            { favorite_class: "Computer Science" },
            { has_language_examination: true },
        ],
    },
})
    .then((data) => {
        console.log("Students with favorite class 'Computer Science' or language examination:");
        data.forEach((element) => {
            console.log(element.toJSON());
        });
    })
    .catch((err) => {
        console.log(`Error fetching students: ${err.message}`);
    });

// Évfolyamonkénti diákok száma (COUNT)
Student.findAll({
    attributes: [
        "school_year",
        [sequelize.fn("COUNT", sequelize.col("student_id")), "num_students"],
    ],
    group: "school_year",
})
    .then((data) => {
        console.log("Number of students per school year:");
        data.forEach((element) => {
            console.log(element.toJSON());
        });
    })
    .catch((err) => {
        console.log(`Error in aggregation query: ${err.message}`);
    });
