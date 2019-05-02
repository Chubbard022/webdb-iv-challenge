
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dish')
    .then(function () {
      // Inserts seed entries
      return knex('dish').insert([
        { dish_name: 'hamburger'},
        { dish_name: 'pizza'},
        { dish_name: 'sandwich'}
      ]);
    });
};
