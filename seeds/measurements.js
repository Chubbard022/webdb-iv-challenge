
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('measurements')
    .then(function () {
      // Inserts seed entries
      return knex('measurements').insert([
        {measurement_name: 'two slices'},
        {measurement_name: '1 slice'},
        {measurement_name: '1/4 pound'},
      ]);
    });
};
