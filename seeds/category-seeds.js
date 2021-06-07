// creates a variable of categoryData that can be called upon to seed the database through that variable
const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Shirts',
  },
  {
    category_name: 'Shorts',
  },
  {
    category_name: 'Music',
  },
  {
    category_name: 'Hats',
  },
  {
    category_name: 'Shoes',
  },
];
//creates the variable(function) seedCategories that holds the value of the above array 
const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
