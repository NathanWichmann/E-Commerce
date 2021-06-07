const { Tag } = require('../models');
//creates the variable tagData that holds the array of objects 
const tagData = [
  {
    tag_name: 'rock music',
  },
  {
    tag_name: 'pop music',
  },
  {
    tag_name: 'blue',
  },
  {
    tag_name: 'red',
  },
  {
    tag_name: 'green',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'gold',
  },
  {
    tag_name: 'pop culture',
  },
];
//creates the function seedTags that creates the tagdata table of tage_names 
const seedTags = () => Tag.bulkCreate(tagData);
// exports the function seedTags 
module.exports = seedTags;
