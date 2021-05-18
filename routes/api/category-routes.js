const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    include: [Product],
  })
  .then((categories) => {
      res.json(categories)
    }
  // be sure to include its associated Products
  );

})
// api/catergories/6

router.get('/:id', (req, res) => {
  console.log(req.params)

  Category.findOne({
    where: {
      id:req.params.id
    },
    include: [Product]
  })

  .then( (category) => {
    res.json(category)
  })
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  Category.create(req.body)
  .then((category) => res.status(200).json(category))
  .catch((err) => res.status(400).json(err))
  // create a new category
});

router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then((category) => res.status(200).json(category))
  .catch((err) => res.status(400).json(err))
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  // delete a category by its `id` value
  
});

module.exports = router;
