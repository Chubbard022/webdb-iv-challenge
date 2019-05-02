
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient: 'bread',ingredient_measure:1},
        {ingredient: 'cheese',ingredient_measure:2},
        {ingredient: 'meat',ingredient_measure:3}
      ]);
    });
};
