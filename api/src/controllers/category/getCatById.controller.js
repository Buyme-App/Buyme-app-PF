const { Product, Category, SubCategory } = require("../../database/db");
const showErrors = require("../../messageConsole");

async function getCatById(idCat) {
    console.log(idCat)
    try {
        const result = await Product.findAll({
            where: { categoryId: idCat },
            include: [
                {
                    model: Category,
                    attributes: ["name"],
                },
                {
                    model: SubCategory,
                    attributes: ["name"],
                },
            ],
        });

        if (result === null) return 404;
        else return result;
    } catch (e) {
        showErrors("getCatById", e);
        return 404;
    }
};

module.exports = getCatById;