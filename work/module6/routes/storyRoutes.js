const express = require('express');
const controller = require('../controllers/storyController');

const router = express.Router();


    //GET /stories: send all stores to the user

router.get('/', controller.index);

    //GET /stories/new: send html form for creating a new story

router.get('/new', controller.new);

    //POST /stories: create a new story

router.post('/', controller.create);

    //GET /stories/:id: send details of story identifed by id
router.get('/:id', controller.show);

    //UPDATE /stories/:id/edit: send html form for editing a existing story
router.get('/:id/edit', controller.edit);

    //PUt /stoires:id/:update the story identified by ID

router.put('/:id', controller.update);

    //DELETE /stoires:id: deletes the story identified by ID
router.get('/:id', controller.delete);



module.exports = router;