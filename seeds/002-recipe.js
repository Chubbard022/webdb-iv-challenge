
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe')
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        { recipe_name: 'cheese burger',dish_id: 1},
        { recipe_name: 'western burger',dish_id: 1},
        {recipe_name: 'ham sandwich',dish_id: 3}
      ]);
    });
};
