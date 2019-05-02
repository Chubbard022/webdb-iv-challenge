
exports.up = function(knex, Promise) {

return knex.schema
    .createTable("dish", tbl=>{
        tbl.increments(); //primary key
        tbl.string("dish_name",25)
        .unique() //name of dish
})
    .createTable("recipe",tbl=>{
        tbl.increments() //primary key
        tbl.string("recipe_name",40) //recipe name
        tbl.integer("dish_id") //Fk to dish
            .unsigned()
            .references("id")
            .inTable("dish")
            .onDelete("RESTRICT")
            .onUpdate("CASCADE")
})
    .createTable("recipe_ingredients",tbl=>{
        tbl.increments() //primary key
        tbl.integer("recipe_id") //FK
            .unsigned()
            .references("id")
            .inTable("recipe")
            .onDelete("RESTRICT")
            .onUpdate("CASCADE")
        tbl.integer("ingredients_id") //FK
            .unsigned()
            .references("id")
            .inTable("ingredients")
            .onDelete("RESTRICT")
            .onUpdate("CASCADE")

})
    .createTable("ingredients",tbl=>{
        tbl.increments() //primary key
        tbl.string("ingredient",20) //ingredient name
        tbl.string("amount",20) //amount of measurements needed
        tbl.integer("ingredient_measure") //FK
            .unsigned()
            .references("id")
            .inTable("measurements")
            .onDelete("RESTRICT")
            .onUpdate("CASCADE")
})
    .createTable("measurements",tbl=>{
        tbl.increments() //Primary Key
        tbl.string("measurement_name",20)
    })
};

exports.down = function(knex, Promise) {
    return knex.schema
        .dropTableIfExists("measurements")
        .dropTableIfExists("ingredients")
        .dropTableIfExists("recipe_ingredients")
        .dropTableIfExists("recipe")
        .dropTableIfExists("dish")
};
